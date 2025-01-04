import React, { useState } from 'react';
import axios from 'axios';
import './DetectMigraine.css';

const DetectMigraine: React.FC = () => {
    const [age, setAge] = useState('');
    const [frequency, setFrequency] = useState('');
    const [character, setCharacter] = useState('');
    const [nausea, setNausea] = useState('');
    const [phonophobia, setPhonophobia] = useState('');
    const [photophobia, setPhotophobia] = useState('');
    const [visual, setVisual] = useState('');
    const [dysphasia, setDysphasia] = useState('');
    const [vertigo, setVertigo] = useState('');
    const [hypoacusis, setHypoacusis] = useState('');
    const [defect, setDefect] = useState('');
    const [conscience, setConscience] = useState('');
    const [DPF, setDPF] = useState('');
    const [paresthesia, setParesthesia] = useState('');
    const [ataxia, setAtaxia] = useState('');
    const [diplopia, setDiplopia] = useState('');
    const [tinnitus, setTinnitus] = useState('');
    const [dysarthria, setDysarthria] = useState('');
    const [sensory, setSensory] = useState('');
    const [vomit, setVomit] = useState('');
    const [location, setlocation] = useState('');
    const [intensity, setIntensity] = useState('');
    const [duration, setDuration] = useState('');
    const [prediction, setPrediction] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8084/migraine', {
                age: age,
                frequency: frequency,
                character: character,
                nausea: nausea,
                phonophobia: phonophobia,
                photophobia: photophobia,
                visual: visual,
                dysphasia: dysphasia,
                vertigo: vertigo,
                hypoacusis: hypoacusis,
                defect: defect,
                conscience: conscience,
                DPF: DPF,
                paresthesia: paresthesia,
                ataxia: ataxia,
                diplopia: diplopia,
                tinnitus: tinnitus,
                dysarthria: dysarthria,
                sensory: sensory,
                vomit: vomit,
                intensity: intensity,
                location: location,
                duration: duration
            });
            setPrediction(response.data.message || 'Prediction successful!');
            // console.log(response.data);
            // console.log("Success!")
        } catch (error: any) {
            setPrediction('Prediction failed. Try again.');
            // console.error(error.response?.data || 'Prediction failed.');
        }
    }

    return (
        <div className="container">  
        <div className="heading">
        <h1 >Predict Migraine</h1>
        </div>
        <div id="container" className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="tinnitus">Tinnitus:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                How long does your typical migraine last? (e.g., 4 hours, 2 days)
                            </span>
                        </span>
                    </label>
                    <input
                        type="number"
                        id="tinnitus"
                        value={tinnitus}
                        onChange={(e) => setTinnitus(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Where do you feel the pain? (e.g., one side of head, behind eyes)
                            </span>
                        </span>
                    </label>
                    <input
                        type="number"
                        id="location"
                        value={location}
                        onChange={(e) => setlocation(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="duration">Duration:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                How long does your typical migraine last? (e.g., 4 hours, 2 days)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="frequency">Frequency:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Where do you feel the pain? (e.g., one side of head, behind eyes)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="frequency"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="character">Character:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Describe the type of pain (e.g., throbbing, sharp, dull)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="character"
                        value={character}
                        onChange={(e) => setCharacter(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="intensity">Intensity:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Rate the pain intensity from 1 (mild) to 10 (severe)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="intensity"
                        value={intensity}
                        onChange={(e) => setIntensity(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nausea">Nausea:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience nausea during migraines? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="nausea"
                        value={nausea}
                        onChange={(e) => setNausea(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="vomit">Vomit:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you vomit during migraines? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="vomit"
                        value={vomit}
                        onChange={(e) => setVomit(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phonophobia">Phonophobia:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Are you sensitive to sound during migraines? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="phonophobia"
                        value={phonophobia}
                        onChange={(e) => setPhonophobia(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="photophobia">Photophobia:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Are you sensitive to light during migraines? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="photophobia"
                        value={photophobia}
                        onChange={(e) => setPhotophobia(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="visual">Visual:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience visual disturbances? (e.g., flashing lights, blind spots)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="visual"
                        value={visual}
                        onChange={(e) => setVisual(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sensory">Sensory:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience any sensory symptoms? (e.g., numbness, tingling)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="sensory"
                        value={sensory}
                        onChange={(e) => setSensory(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dysphasia">Dysphasia:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you have difficulty speaking or understanding speech? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="dysphasia"
                        value={dysphasia}
                        onChange={(e) => setDysphasia(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dysarthria">Dysarthria:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience slurred or slow speech? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="dysarthria"
                        value={dysarthria}
                        onChange={(e) => setDysarthria(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="vertigo">Vertigo:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience a spinning sensation? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="vertigo"
                        value={vertigo}
                        onChange={(e) => setVertigo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hypoacusis">Hypoacusis:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience reduced hearing ability? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="hypoacusis"
                        value={hypoacusis}
                        onChange={(e) => setHypoacusis(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="diplopia">Diplopia:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you hear ringing or buzzing in your ears? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="diplopia"
                        value={diplopia}
                        onChange={(e) => setDiplopia(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="defect">Defect:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience any visual field defects? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="defect"
                        value={defect}
                        onChange={(e) => setDefect(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ataxia">Ataxia:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience loss of muscle coordination? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="ataxia"
                        value={ataxia}
                        onChange={(e) => setAtaxia(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="conscience">Conscience:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience any changes in consciousness? (e.g., confusion, disorientation)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="conscience"
                        value={conscience}
                        onChange={(e) => setConscience(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="paresthesia">Paresthesia:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you experience tingling or prickling sensations? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="paresthesia"
                        value={paresthesia}
                        onChange={(e) => setParesthesia(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="DPF">DPF:
                        <span className="tooltip">
                            <span className="info-icon">i</span>
                            <span className="tooltiptext">
                                Do you have a family history of migraines? (Yes/No)
                            </span>
                        </span>
                    </label>
                    <input
                        type="text"
                        id="DPF"
                        value={DPF}
                        onChange={(e) => setDPF(e.target.value)}
                        required
                    />
                </div>

                <input type="submit" value="Predict" />
            </form>
            {prediction && <div id="prediction">{prediction}</div>}
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
        </div>
        </div>
    );
};

export default DetectMigraine;