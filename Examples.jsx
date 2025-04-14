import TabButton from "./TabButton.jsx"
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState("");
    function handleSelect(sButton) {
        setSelectedTopic(sButton);
        //console.log(selectedTopic);
      }
    return (<Section title="Examples" id="examples">
              <Tabs  k={
                <>
                <TabButton 
                  btnSelected={selectedTopic === "components"}
                  onSelect={() => handleSelect("components")}
                >
                  Components
                </TabButton>
                <TabButton
                  btnSelected={selectedTopic === "jsx"}
                  onSelect={() => handleSelect("jsx")}
                >
                  jsx
                </TabButton>
                <TabButton
                  btnSelected={selectedTopic === "props"}
                  onSelect={() => handleSelect("props")}
                >
                  Props
                </TabButton>
                <TabButton
                  btnSelected={selectedTopic === "state"}
                  onSelect={() => handleSelect("state")}
                >
                  State
                </TabButton>
                </>
              }>

              </Tabs>
             
                
              {!selectedTopic ? (
                <p>Please select one of these</p>
              ) : (
                <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>{EXAMPLES[selectedTopic].code}</pre>
                </div>
              )}
            </Section>)
}