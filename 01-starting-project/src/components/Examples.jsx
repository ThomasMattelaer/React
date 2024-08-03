
import { EXAMPLES } from '../data';
import TabButton from './TabButton.jsx';
import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx'; 

export default function Examples (){
    const [state, setState] = useState()
    function HandleClick(state){
    setState(state); 
    } 

    let tabContent = <p>Please select a topic.</p> 
    if(state){
        tabContent =   
        <div id='tab-content'>
            <h3>{EXAMPLES[state].title}</h3>
            <p>{EXAMPLES[state].description}</p>
            <pre>
                <code>
                    {EXAMPLES[state].code}
                </code>
            </pre>
        </div>
    }
    return(

        <Section title = "Examples" id='examples'>
            <Tabs buttons =  {
                <>
                    <TabButton isSelected = {state === "components"} onClick = {() => HandleClick('components')}> Component </TabButton>
                    <TabButton isSelected = {state === "jsx"} onClick = {() => HandleClick('jsx')}> JSX </TabButton>
                    <TabButton isSelected = {state === "props"} onClick = {() => HandleClick('props')}> Props </TabButton>
                    <TabButton isSelected = {state === "state"} onClick = {() => HandleClick('state')}> State </TabButton>
                </>
            }>
            
            {tabContent}
            
            </Tabs>         
        </Section>
    )
}