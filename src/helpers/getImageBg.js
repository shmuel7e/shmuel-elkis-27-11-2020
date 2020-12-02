import sunny from "../assets/images/sunny.jpg";
import cloudy from "../assets/images/cloudy.jpg";
import snowy from "../assets/images/snow.jpg";
import rainy from "../assets/images/rainy.jpg";
import thunder from "../assets/images/thunder.jpg";
import fog from "../assets/images/fog.jpg";
import hazy from "../assets/images/hazy.jpg";
import overcast from "../assets/images/overcast.jpg";
import night from "../assets/images/night.jpg";
import shower from "../assets/images/shower.jpg";
import dreary from "../assets/images/dreary.jpg";
import windy from "../assets/images/windy.jpg";
/**
 * @param {string} choice
 * @return {image}
 */

export const getImageBg = (choice) => {
  if (choice.toLowerCase().includes("clear")) return sunny;
  else if (choice.toLowerCase().includes("cloudy")) return cloudy;
  else if (choice.toLowerCase().includes("sun")) return sunny;
  else if (choice.toLowerCase().includes("snow")) return snowy;
  else if (choice.toLowerCase().includes("rain")) return rainy;
  else if (choice.toLowerCase().includes("thunder")) return thunder;
  else if (choice.toLowerCase().includes("fog")) return fog;
  else if (choice.toLowerCase().includes("hazy")) return hazy;
  else if (choice.toLowerCase().includes("overcast")) return overcast;
  else if (choice.toLowerCase().includes("night")) return night;
  else if (choice.toLowerCase().includes("shower")) return shower;
  else if (choice.toLowerCase().includes("dreary")) return dreary;
  else if (choice.toLowerCase().includes("windy")) return windy;
};

export default getImageBg;
