import { ChatGPTInteraction } from "./ChatGPTInteraction.js";
import { DalleInteraction } from "./DalleInteraction.js";

export class PromptManager {
  listOfInteractions = [];

  recordChatGPTInteraction(prompt, response) {
    const newInteraction = new ChatGPTInteraction(prompt, response);
    this.listOfInteractions.push(newInteraction);
    console.log("\nSuccessfully added your ChatGPT Interaction\n");
  }

  recordDalleInteraction(prompt, response, imageURL) {
    //checking for image URL
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
    if (urlPattern.test(imageURL)) {
      const newInteraction = new DalleInteraction(prompt, response, imageURL);
      this.listOfInteractions.push(newInteraction);
      console.log("\nSuccessfully added your Dalle Interaction\n");
    } else {
      console.log(
        "\nInvalid imageURL entered. Could not add new Dalle Interaction. Please try again"
      );
    }
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
    if (interactionID <= this.listOfInteractions.length) {
      if (this.listOfInteractions.length === 0) {
        console.log("Try adding a new interaction and then removing it!");
      } else {
        console.log("\nList of Interactions:");
        this.listOfInteractions.splice(interactionID - 1, 1);
        console.log(
          `Successfully removed interaction with ID ${interactionID}`
        );
      }
    } else {
      console.log(
        "Please enter a valid ID. No interaction exists with this ID"
      );
    }
  }
}
