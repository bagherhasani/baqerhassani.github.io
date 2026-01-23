import React, { useEffect, useCallback, useState } from "react";
import "../css/modal.scss";

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = [".webm", ".mp4", ".mov", ".avi"];
  return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
};

export default function NvidiaModal({
  item,
  id,
  totalItems = 0,
  onPrevious,
  onNext,
  closeModal,
}) {
  const [isClosing, setIsClosing] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal(false);
    }, 300);
  }, [closeModal]);

  const handlePrevious = useCallback(() => {
    if (onPrevious && id > 0) {
      onPrevious();
    }
  }, [onPrevious, id]);

  const handleNext = useCallback(() => {
    if (onNext && id < totalItems - 1) {
      onNext();
    }
  }, [onNext, id, totalItems]);

  // Keyboard navigation + lock scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [handlePrevious, handleNext, handleClose]);

  const mediaList = item.mediaList && item.mediaList.length > 0
    ? item.mediaList
    : [item.media];

  const activeMedia = mediaList[mediaIndex] || mediaList[0];
  const isVideo = isVideoFile(activeMedia);
  const hasMultipleMedia = mediaList.length > 1;

  const handlePrevMedia = () => {
    setMediaIndex((prev) =>
      prev === 0 ? mediaList.length - 1 : prev - 1
    );
  };

  const handleNextMedia = () => {
    setMediaIndex((prev) =>
      prev === mediaList.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div
        className={`modalBackground ${isClosing ? "closing" : ""}`}
        onClick={handleClose}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      ></div>
      <div className={`modalContainer ${isClosing ? "closing" : ""}`}>
        <div className="titleCloseBtn">
          <button onClick={handleClose}>
            <h3>&#215;</h3>
          </button>
        </div>

        <div className="body nvidia-modal-body">
          <div className="nvidia-modal-media-wrapper">
            {item.title && (
              <div className="nvidia-modal-media-title">
                <h2>{item.title}</h2>
              </div>
            )}
            {isVideo ? (
              <video
                src={activeMedia}
                className="img-fluid modal-media"
                autoPlay
                controls
                muted
                playsInline
                loading="lazy"
              />
            ) : (
              <img
                src={activeMedia}
                alt={item.title}
                className="img-fluid modal-media"
                loading="lazy"
              />
            )}

            {hasMultipleMedia && (
              <>
                <button
                  type="button"
                  className="nvidia-media-nav nvidia-media-prev"
                  onClick={handlePrevMedia}
                  aria-label="Previous media"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  className="nvidia-media-nav nvidia-media-next"
                  onClick={handleNextMedia}
                  aria-label="Next media"
                >
                  &#8250;
                </button>
              </>
            )}

            {item.tags && item.tags.length > 0 && (
              <div className="nvidia-modal-tags nvidia-modal-tags-below">
                {item.tags.map((tag, index) => (
                  <span key={index} className="nvidia-modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="nvidia-modal-text">
            {item.description && (
              <p className="nvidia-modal-description">{item.description}</p>
            )}

            {item.highlights && (
              <div className="nvidia-modal-highlights">
                {item.highlights.role && (
                  <div className="nvidia-highlight-row">
                    <span className="nvidia-highlight-label">What I worked on</span>
                    <span className="nvidia-highlight-value">{item.highlights.role}</span>
                  </div>
                )}
                {item.highlights.tech && (
                  <div className="nvidia-highlight-row">
                    <span className="nvidia-highlight-label">Tech I used</span>
                    <span className="nvidia-highlight-value">{item.highlights.tech}</span>
                  </div>
                )}
                {item.highlights.impact && (
                  <div className="nvidia-highlight-row">
                    <span className="nvidia-highlight-label">Impact</span>
                    <span className="nvidia-highlight-value">{item.highlights.impact}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* GitHub CTA hidden for now */}
      </div>

      {totalItems > 1 && (
        <>
          {id > 0 && (
            <button
              className="modal-nav-btn modal-prev"
              onClick={handlePrevious}
              aria-label="Previous project"
            >
              <span>&#8249;</span>
            </button>
          )}
          {id < totalItems - 1 && (
            <button
              className="modal-nav-btn modal-next"
              onClick={handleNext}
              aria-label="Next project"
            >
              <span>&#8250;</span>
            </button>
          )}
        </>
      )}
    </>
  );
}


