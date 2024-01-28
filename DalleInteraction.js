import { ChatGPTInteraction } from "./ChatGPTInteraction.js";

export class DalleInteraction extends ChatGPTInteraction{

  constructor(prompt,response,imageURL) {
    super(prompt,response);
    this.imageURL = imageURL;
  }

  showInteraction() {
    console.log(`\nPrompt: ${this.prompt}\nResponse: ${this.response}\nImageURL: ${this.imageURL}\nType: ${this.declareInteractionType()}`);  
  }

  declareInteractionType (){
    return "DalleInteraction";
  }
}