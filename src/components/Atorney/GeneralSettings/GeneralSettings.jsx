import React from 'react';
import styles from './GeneralSettings.module.css'

const GeneralSettings = () => {
    return (
        <div>
           {/* Left Navigation  */}
    <nav className={styles.settingsNav} >
        <ul classNameName='d-flex'>
            <li className="active"> <span> 1 </span> General Settings</li>
            <li> <span> 2 </span> Knowledge Base</li>
            <li> <span> 3 </span> Voice Cloning</li>
        </ul>
    </nav>
     {/* Main Content  */}
    <main className={styles.settingsContent}>
        {/* General Settings Section */}
        <section className={styles.settingsSection}>
            <h1 >General Settings</h1>
            
             {/* Language Section */}
            <div className={styles.formGroup}>
                <h3>Agent language *</h3>
                <p>Choose the default language the agent will communicate in.</p>
                <select className={`${styles.formControl}`}>
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>
            </div>

             {/* Additional Language Section */}
            <div className={styles.formGroup}>
                <h3>Additional language</h3>
                <p>Choose additional languages that the user can specify before starting the call.</p>
                <div className={styles.languageOptions}>
                    <div className={styles.languageItem}>
                        <input type="checkbox" id="audio-en"/>
                        <label for="audio-en">Audio: English</label>
                    </div>
                    <div className={styles.languageItem}>
                        <input type="checkbox" id="audio-ar"/>
                        <label for="audio-ar">Audio: Arabic</label>
                    </div>
                </div>
            </div>

             {/* Welcome Message Section */}
            <div className={styles.formGroup}>
                <h3>Welcome message</h3>
                <p>Write the message that agent will say at the beginning of the call.</p>
                <textarea className={` ${styles.formControl}`} rows="4">Hello, how can I help you today?</textarea>
            </div>

             {/* Navigation Button */}
            <div className={styles.formActions}>
                <button className={styles.btnPrimary}>Next →</button>
            </div>
        </section>
    </main>
        </div>
    );
}

export default GeneralSettings;
