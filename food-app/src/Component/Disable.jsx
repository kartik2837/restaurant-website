import React, { useEffect, useState } from 'react';

// Default export React component to block common client-side copying / inspection attempts
// Note: Client-side protections can be bypassed by determined users. See README notes below.

export default function Disable() {
  const [popup, setPopup] = useState({ visible: false, message: '' });

  useEffect(() => {
    // Prevent right-click context menu
    function onContextMenu(e) {
      e.preventDefault();
      setPopup({ visible: true, message: 'Right-click is disabled on this site.' });
    }

    // Prevent selection start (drag selection)
    function onSelectStart(e) {
      e.preventDefault();
      setPopup({ visible: true, message: 'Text selection is disabled.' });
    }

    // Prevent copy/cut/paste
    function onCopyCutPaste(e) {
      e.preventDefault();
      setPopup({ visible: true, message: 'Copying content is disabled.' });
    }

    // Block certain keyboard combos (F12, Ctrl+Shift+I/C, Ctrl+U)
    function onKeyDown(e) {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        setPopup({ visible: true, message: 'Opening developer tools is disabled.' });
      }

      // Ctrl+Shift+I / Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C')) {
        e.preventDefault();
        setPopup({ visible: true, message: 'Opening developer tools is disabled.' });
      }

      // Ctrl+U (view-source)
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        setPopup({ visible: true, message: 'Viewing source is disabled.' });
      }

      
    }

    // Apply styles to prevent selection (CSS-level)
    const previousUserSelect = document.body.style.userSelect;
    document.body.style.userSelect = 'none';

    // Attach listeners
    document.addEventListener('contextmenu', onContextMenu);
    document.addEventListener('selectstart', onSelectStart);
    document.addEventListener('copy', onCopyCutPaste);
    document.addEventListener('cut', onCopyCutPaste);
    document.addEventListener('paste', onCopyCutPaste);
    document.addEventListener('keydown', onKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', onContextMenu);
      document.removeEventListener('selectstart', onSelectStart);
      document.removeEventListener('copy', onCopyCutPaste);
      document.removeEventListener('cut', onCopyCutPaste);
      document.removeEventListener('paste', onCopyCutPaste);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.userSelect = previousUserSelect;
    };
  }, []);

  // Small modal / popup shown when user triggers a blocked action
  return (
    <>
      {popup.visible && (
        <div style={overlayStyle} onClick={() => setPopup({ visible: false, message: '' })}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ margin: 0 }}>Action blocked</h3>
            <p style={{ marginTop: 8 }}>{popup.message}</p>
            <button style={buttonStyle} onClick={() => setPopup({ visible: false, message: '' })}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// --- Inline styles (simple, change as you like) ---
const overlayStyle = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.45)',
  zIndex: 9999,
};

const modalStyle = {
  background: 'white',
  padding: '18px 22px',
  borderRadius: 8,
  boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
  maxWidth: 360,
  textAlign: 'center',
};

const buttonStyle = {
  marginTop: 12,
  padding: '8px 14px',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
};

