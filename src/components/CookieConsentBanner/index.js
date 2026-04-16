import React, {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

const CONSENT_KEY = 'sfit-cookie-consent';
const CONSENT_OPEN_EVENT = 'sfdevops:open-cookie-settings';
const TRACKING_ID = 'G-2RDNHGG4H5';

let analyticsInitialized = false;

function loadAnalytics() {
  if (typeof window === 'undefined' || analyticsInitialized) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag('js', new Date());
  window.gtag('config', TRACKING_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });

  if (!document.querySelector(`script[src*="${TRACKING_ID}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
    document.head.appendChild(script);
  }

  analyticsInitialized = true;
}

function trackPageView(pathname) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pathname,
  });
}

export default function CookieConsentBanner() {
  const location = useLocation();
  const currentPath = useMemo(
    () => `${location.pathname}${location.search}${location.hash}`,
    [location.hash, location.pathname, location.search],
  );
  const [consent, setConsent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const savedConsent = window.localStorage.getItem(CONSENT_KEY);
    setConsent(savedConsent);
    setIsOpen(!savedConsent);

    const handleOpenSettings = () => {
      setIsOpen(true);
    };

    window.addEventListener(CONSENT_OPEN_EVENT, handleOpenSettings);
    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, handleOpenSettings);
    };
  }, []);

  useEffect(() => {
    if (consent !== 'accepted') {
      return;
    }

    loadAnalytics();
    trackPageView(currentPath);
  }, [consent, currentPath]);

  const saveConsent = value => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(CONSENT_KEY, value);
    }

    setConsent(value);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className={styles.content}>
        <p className={styles.text}>
          We use optional cookies only for <strong>Google Analytics</strong> to understand which
          content is useful and improve the Knowledge Hub. We do not use advertising or marketing
          cookies. Analytics stays disabled until you accept. Read more in our{' '}
          <Link to="/privacy">Privacy & Cookies</Link> page.
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className="button button--primary button--sm"
            onClick={() => saveConsent('accepted')}>
            Accept analytics
          </button>
          <button
            type="button"
            className="button button--secondary button--sm"
            onClick={() => saveConsent('rejected')}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
