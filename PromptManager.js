import { ChatGPTInteraction } from "./ChatGPTInteraction.js";
import { DalleInteraction } from "./DalleInteraction.js";

export class PromptManager {
  listOfInteractions = [];

  recordChatGPTInteraction(prompt, response) {
    const newInteraction = new ChatGPTInteraction(prompt, response);
    this.listOfInteractions.push(newInteraction);
  }

  recordDalleInteraction(prompt, response, imageURL) {
    const newInteraction = new DalleInteraction(prompt, response, imageURL);
    this.listOfInteractions.push(newInteraction);
  }

  showAllInteractions() {
    if (this.listOfInteractions.length === 0) {
      console.log("\nThere are no existing interactions. Please try again");
    } else {
      console.log("\nList of Interactions:");
      this.listOfInteractions.forEach((interaction, index) => {
        console.log(`\nInteraction ID: ${index + 1}`);
        interaction.showInteraction();
      });
    }
  }

  removeInteractionByID(interactionID) {
    if (this.listOfInteractions.length === 0) {
      console.log("Try adding a new interaction and then removing it!");
    } else {
      console.log("\nList of Interactions:");
      this.listOfInteractions.splice(interactionID - 1, 1);
      console.log(`Successfully removed interaction with ID ${interactionID}`);
    }
  }
}
