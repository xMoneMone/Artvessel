export default function LinkChecker(name){
    if (!name) {
        return("")
    }
    else if (name.includes("twitter")) {
        return("twitter")
      }
    else if (name.includes("artfol")) {
        return("artfol")
    }
    else if (name.includes("instagram")) {
        return("instagram")
      }
    else if (name.includes("facebook")) {
        return("facebook")
    }
    else if (name.includes("discord")) {
        return("discord")
    }
    else if (name.includes("tiktok")) {
        return("tiktok")
    }
    else if (name.includes("linkedin")) {
        return("linkedin")
    }
    else if (name.includes("youtube")) {
        return("youtube")
    }
    else if (name.includes("twitch")) {
        return("twitch")
    }
    else {
        return("unknown")
    }
}