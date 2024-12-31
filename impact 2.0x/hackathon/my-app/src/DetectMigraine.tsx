import React, { useState } from 'react';
import axios from 'axios';

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
            console.log(response.data);
            console.log("Success!")
        } catch (error: any) {
            console.error(error.response?.data || 'Prediction failed.');
        }
    }

    return (
        <div>
            <h2>Predict Migraine</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='age'>Age: </label>
                <input
                    id='age'
                    type='text'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <label htmlFor='vertigo'>Vertigo: </label>
                <input
                    id='vertigo'
                    type='number'
                    value={vertigo}
                    onChange={(e) => setVertigo(e.target.value)}
                    required
                />
                <label htmlFor='dysphasia'>Dysphasia: </label>
                <input
                    id='dysphasia'
                    type='number'
                    value={dysphasia}
                    onChange={(e) => setDysphasia(e.target.value)}
                    required
                />
                <label htmlFor='frequency'>Frequency: </label>
                <input
                    id='frequency'
                    type='number'
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    required
                />
                <label htmlFor='character'>Character: </label>
                <input
                    id='character'
                    type='number'
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    required
                />
                <label htmlFor='nausea'>Nausea: </label>
                <input
                    id='nausea'
                    type='number'
                    value={nausea}
                    onChange={(e) => setNausea(e.target.value)}
                    required
                />
                <label htmlFor='phonophobia'>Phonophobia: </label>
                <input
                    id='phonophobia'
                    type='number'
                    value={phonophobia}
                    onChange={(e) => setPhonophobia(e.target.value)}
                    required
                />
                <label htmlFor='photophobia'>Photophobia: </label>
                <input
                    id='photophobia'
                    type='number'
                    value={photophobia}
                    onChange={(e) => setPhotophobia(e.target.value)}
                    required
                />
                <label htmlFor='visual'>Visual: </label>
                <input
                    id='visual'
                    type='number'
                    value={visual}
                    onChange={(e) => setVisual(e.target.value)}
                    required
                />
                <label htmlFor='hypoacusis'>Hypoacusis: </label>
                <input
                    id='hypoacusis'
                    type='number'
                    value={hypoacusis}
                    onChange={(e) => setHypoacusis(e.target.value)}
                    required
                />
                <label htmlFor='defect'>Defect: </label>
                <input
                    id='defect'
                    type='number'
                    value={defect}
                    onChange={(e) => setDefect(e.target.value)}
                    required
                />
                <label htmlFor='conscience'>Conscience: </label>
                <input
                    id='conscience'
                    type='number'
                    value={conscience}
                    onChange={(e) => setConscience(e.target.value)}
                    required
                />
                <label htmlFor='DPF'>DPF: </label>
                <input
                    id='DPF'
                    type='number'
                    value={DPF}
                    onChange={(e) => setDPF(e.target.value)}
                    required
                />
                <label htmlFor='paresthesia'>Paresthesia: </label>
                <input
                    id='paresthesia'
                    type='number'
                    value={paresthesia}
                    onChange={(e) => setParesthesia(e.target.value)}
                    required
                />
                <label htmlFor='ataxia'>Ataxia: </label>
                <input
                    id='ataxia'
                    type='number'
                    value={ataxia}
                    onChange={(e) => setAtaxia(e.target.value)}
                    required
                />
                <label htmlFor='diplopia'>Diplopia: </label>
                <input
                    id='diplopia'
                    type='number'
                    value={diplopia}
                    onChange={(e) => setDiplopia(e.target.value)}
                    required
                />
                <label htmlFor='tinnitus'>Tinnitus: </label>
                <input
                    id='tinnitus'
                    type='number'
                    value={tinnitus}
                    onChange={(e) => setTinnitus(e.target.value)}
                    required
                />
                <label htmlFor='dysarthria'>Dysarthria: </label>
                <input
                    id='dysarthria'
                    type='number'
                    value={dysarthria}
                    onChange={(e) => setDysarthria(e.target.value)}
                    required
                />
                <label htmlFor='sensory'>Sensory: </label>
                <input
                    id='sensory'
                    type='number'
                    value={sensory}
                    onChange={(e) => setSensory(e.target.value)}
                    required
                />
                <label htmlFor='vomit'>Vomit: </label>
                <input
                    id='vomit'
                    type='number'
                    value={vomit}
                    onChange={(e) => setVomit(e.target.value)}
                    required
                />
                <label htmlFor='intensity'>Intensity: </label>
                <input
                    id='intensity'
                    type='number'
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value)}
                    required
                />
                <label htmlFor='location'>Location: </label>
                <input
                    id='location'
                    type='number'
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                    required
                />
                <label htmlFor='duration'>Duration: </label>
                <input
                    id='duration'
                    type='number'
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />

                <button type='submit'>
                    Predict
                </button>
            </form>
        </div>
    );
};

export default DetectMigraine;