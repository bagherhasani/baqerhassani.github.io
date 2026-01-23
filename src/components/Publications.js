import React, { useState, useRef, useEffect } from "react"
import Fade from "./animations/Fade"
import { getText } from "../data"
import "../styles/publications.scss"

// Import publication images/videos
import hriLabGif from "../images/publications/hri_lab.gif"
import wam_pic from "../images/publications/pub_caveman.png"
import anti_pic from "../images/publications/pub_anti.png"
// NOTE: videos are served via GitHub Releases URLs (no local video bundling)

const FALLBACK_VIDEO_URL =
  "https://github.com/bagherhasani/Tracer_Lidar/releases/download/videos/Archelology.1.mp4";

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

const Publications = () => {
  const [videoErrors, setVideoErrors] = useState({});
  const videoRefs = useRef([]);

  // Force video play when videos come into view (helps with iOS autoplay restrictions)
  useEffect(() => {
    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            try {
              forceVideoPlay(video);
            } catch (error) {
              console.warn('Error forcing video play:', error);
            }
          }
        });
      }, {
        threshold: 0.5 // Trigger when 50% of video is visible
      });

      // Observe all video elements
      videoRefs.current.forEach(video => {
        if (video) {
          try {
            observer.observe(video);
          } catch (error) {
            console.warn('Error observing video:', error);
          }
        }
      });

      return () => {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn('Error disconnecting observer:', error);
        }
      };
    } catch (error) {
      console.warn('Error setting up intersection observer:', error);
    }
  }, []); // Remove the mutable dependency

  const handleVideoError = (publicationId) => {
    console.warn(`Video failed to load for publication ${publicationId}`);
    setVideoErrors(prev => ({ ...prev, [publicationId]: true }));
  };

  const forceVideoPlay = (videoElement) => {
    if (videoElement) {
      videoElement.muted = true; // Ensure it's muted for autoplay
      videoElement.loop = true;  // Ensure looping is enabled
      
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay failed, attempting manual play:', error);
          // Try again after a short delay
          setTimeout(() => {
            videoElement.play().catch(e => console.log('Manual play also failed:', e));
          }, 100);
        });
      }
    }
  };

  const handleVideoEnded = (videoElement) => {
    // Fallback for devices where loop attribute might not work
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play().catch(e => console.log('Loop restart failed:', e));
    }
  };

  const canPlayVideo = (publication) => {
    // Only show fallback if there was an actual error, not for iOS WebM incompatibility
    return !videoErrors[publication.id];
  };
  
  // Publication data with actual links
  const publicationsData = [
    {
      id: 0,
      title: "Your Robot Is a Caveman: Using Robots for Archaeology",
      subtitle: "International Mechanical Engineering Congress and Exposition 2024",
      imageSrc: wam_pic,
      projectLink: "https://imece.secure-platform.com/a/solicitations/236/sessiongallery/18145/application/151001",
      type: ""
    },
    {
      id: 1,
      title: "Preventing Tipping in Mobile Manipulators Using Zero Moment Point Analysis",
      subtitle: "IEEE International Conference on Robotics and Automation, 2026",
      imageSrc: anti_pic,
      projectLink: null,
      underReview: true,
      type: "ICRA 2026"
    }
  ];

  return (
    <div className="section" id="publications">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText("Publications")}</h1>
        </Fade>
        <div className="publications-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {publicationsData.map((publication, index) => (
                <div key={index} className="publication-card">
                  <div 
                    className="background-media"
                    style={{
                      // For image thumbnails, pass the URL via a CSS variable so the CSS
                      // can render a crisp "contain" layer + a blurred "cover" layer behind it.
                      ...(isVideoFile(publication.imageSrc)
                        ? {}
                        : { "--pub-img": `url(${publication.imageSrc})` }),
                    }}
                  >
                    {isVideoFile(publication.imageSrc) && canPlayVideo(publication) && (
                      <video
                        ref={el => {
                          try {
                            videoRefs.current[publication.id] = el;
                          } catch (error) {
                            console.warn(`Error setting video ref for publication ${publication.id}:`, error);
                          }
                        }}
                        className="background-video"
                        src={publication.imageSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        loading="lazy"
                        controls={false}
                        disablePictureInPicture
                        onError={() => {
                          try {
                            handleVideoError(publication.id);
                          } catch (error) {
                            console.warn(`Error in video error handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onLoadStart={() => {
                          try {
                            console.log(`Loading video for publication ${publication.id}`);
                          } catch (error) {
                            console.warn(`Error in video load start handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onCanPlay={(e) => {
                          try {
                            console.log(`Video can play for publication ${publication.id}`);
                            forceVideoPlay(e.target);
                          } catch (error) {
                            console.warn(`Error in video can play handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onLoadedData={(e) => {
                          try {
                            console.log(`Video loaded for publication ${publication.id}`);
                            forceVideoPlay(e.target);
                          } catch (error) {
                            console.warn(`Error in video loaded data handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onEnded={(e) => {
                          try {
                            console.log(`Video ended for publication ${publication.id}, restarting loop`);
                            handleVideoEnded(e.target);
                          } catch (error) {
                            console.warn(`Error in video ended handler for publication ${publication.id}:`, error);
                          }
                        }}
                        style={{
                          WebkitTransform: 'translateZ(0)',
                          transform: 'translateZ(0)',
                        }}
                      />
                    )}
                    {isVideoFile(publication.imageSrc) && !canPlayVideo(publication) && (
                      <div 
                        className="background-video video-fallback"
                        style={{
                          backgroundColor: '#e9ecef',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.9rem',
                          color: '#666',
                          textAlign: 'center',
                          padding: '20px'
                        }}
                      >
                        <div>
                          🎬<br/>
                          <small>Video preview not available<br/>on this device</small>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="content">
                    {publication.type ? (
                      <div className="publication-type" data-type={publication.type}>
                        {publication.type}
                      </div>
                    ) : null}
                    <h3 className="header">{publication.title}</h3>
                    <h4 className="subtitle">{publication.subtitle}</h4>
                    {publication.underReview ? (
                      <button type="button" className="btn" disabled aria-disabled="true">
                        {getText("Under committee review")}
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          window.open(publication.projectLink, "_blank");
                        }}
                        type="button"
                        className="btn"
                        disabled={!publication.projectLink}
                        aria-disabled={!publication.projectLink}
                      >
                        {getText("View Publication")}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications
