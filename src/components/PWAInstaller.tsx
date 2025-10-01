'use client'

import { useEffect } from 'react'

export default function PWAInstaller() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    }

    // Handle install prompt
    let deferredPrompt: any
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt = e
      
      // Show install button or banner
      const installBanner = document.createElement('div')
      installBanner.innerHTML = `
        <div style="
          position: fixed;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: #FBBF24;
          color: black;
          padding: 16px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: system-ui;
        ">
          <div>
            <strong>🐦 Instalar CashBird</strong>
            <div style="font-size: 14px; opacity: 0.8;">Adicione à tela inicial para acesso rápido</div>
          </div>
          <button id="install-btn" style="
            background: black;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
          ">Instalar</button>
          <button id="close-banner" style="
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            margin-left: 8px;
          ">×</button>
        </div>
      `
      
      document.body.appendChild(installBanner)
      
      const installBtn = document.getElementById('install-btn')
      const closeBanner = document.getElementById('close-banner')
      
      installBtn?.addEventListener('click', () => {
        deferredPrompt.prompt()
        deferredPrompt.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt')
          }
          deferredPrompt = null
          installBanner.remove()
        })
      })
      
      closeBanner?.addEventListener('click', () => {
        installBanner.remove()
      })
      
      // Auto remove after 10 seconds
      setTimeout(() => {
        if (document.body.contains(installBanner)) {
          installBanner.remove()
        }
      }, 10000)
    })

    window.addEventListener('appinstalled', () => {
      console.log('CashBird was installed')
    })
  }, [])

  return null
}