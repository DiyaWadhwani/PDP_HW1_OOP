import { PromptManager } from "./PromptManager.js";
import readline from "readline";

const myPrompter = new PromptManager();

async function runMainFunction() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (prompt) => {
    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
      });
    });
  };

  console.log(
    "\nWhat would you like to do today?\n1.Add a new interaction\n2.Remove an existing interaction\n3.Show all interactions\n4.Exit\n"
  );

  const userChoice = parseInt(await askQuestion("Enter your choice: "));

  switch (userChoice) {
    case 1: {
      console.log(
        "\n\nWhat kind of interaction would you like to add?\n1.ChatGPT Interaction\n2.Dalle Interaction\n"
      );

      const interactionType = parseInt(
        await askQuestion("Enter your choice: ")
      );

      switch (interactionType) {
        case 1: {
          const userPrompt = await askQuestion("Enter a prompt: ");
          const userResponse = await askQuestion("Enter a response: ");
          myPrompter.recordChatGPTInteraction(userPrompt, userResponse);
          break;
        }

        case 2: {
          const userPrompt = await askQuestion("Enter a prompt: ");
          const userResponse = await askQuestion("Enter a response: ");
          const userImageURL = await askQuestion("Enter an image URL: ");
          myPrompter.recordDalleInteraction(
            userPrompt,
            userResponse,
            userImageURL
          );
          break;
        }

        default:
          console.log("Invalid interaction type");
          break;
      }
      break;
    }

    case 2:
      myPrompter.showAllInteractions();
      // eslint-disable-next-line no-case-declarations
      const interactionID = await askQuestion(
        "\nEnter the ID of the interaction you want to remove: "
      );
      myPrompter.removeInteractionByID(interactionID);
      break;

    case 3:
      myPrompter.showAllInteractions();
      break;

    case 4:
      console.log("Exiting...");
      rl.close();
      return;

    default:
      console.log("This option does not exist");
      break;
  }

  rl.close();
  runMainFunction();
}

runMainFunction();
