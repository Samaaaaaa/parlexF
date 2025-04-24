import React from 'react';
import './GeneralSettings.css'

const GeneralSettings = () => {
    return (
        <div>
           {/* Left Navigation  */}
    <nav class=" settings-nav">
        <ul className='d-flex'>
            <li class="active"> <span> 1 </span> General Settings</li>
            <li> <span> 2 </span> Knowledge Base</li>
            <li> <span> 3 </span> Voice Cloning</li>
        </ul>
    </nav>
     {/* Main Content  */}
    <main class="settings-content">
        {/* General Settings Section */}
        <section class="settings-section">
            <h1 >General Settings</h1>
            
             {/* Language Section */}
            <div class="form-group">
                <h3>Agent language *</h3>
                <p>Choose the default language the agent will communicate in.</p>
                <select class="form-control">
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>
            </div>

             {/* Additional Language Section */}
            <div class="form-group">
                <h3>Additional language</h3>
                <p>Choose additional languages that the user can specify before starting the call.</p>
                <div class="language-options">
                    <div class="language-item">
                        <input type="checkbox" id="audio-en"/>
                        <label for="audio-en">Audio: English</label>
                    </div>
                    <div class="language-item">
                        <input type="checkbox" id="audio-ar"/>
                        <label for="audio-ar">Audio: Arabic</label>
                    </div>
                </div>
            </div>

             {/* Welcome Message Section */}
            <div class="form-group">
                <h3>Welcome message</h3>
                <p>Write the message that agent will say at the beginning of the call.</p>
                <textarea class="form-control" rows="4">Hello, how can I help you today?</textarea>
            </div>

             {/* Navigation Button */}
            <div class="form-actions">
                <button class="btn-primary">Next →</button>
            </div>
        </section>
    </main>
        </div>
    );
}

export default GeneralSettings;
