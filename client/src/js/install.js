const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

  // google beforeinstallprompt

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
    // if app added to windows === app installed
    // if app installed PREVIOUSLY === true then "app already installed!"
  });

window.addEventListener('appinstalled', (event) => {
  // Clear prompt

  // is this doing anything?
  window.deferredPrompt = null;
}); 
