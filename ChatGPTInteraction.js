export class ChatGPTInteraction {
  constructor(prompt, response) {
    this.prompt = prompt;
    this.response = response;
  }

  showInteraction() {
    console.log(
      `\nPrompt: ${this.prompt}\nResponse: ${this.response}\nType: ${this.declareInteractionType()}`
    );
  }

  declareInteractionType() {
    return "ChatGPTInteraction";
  }
}
