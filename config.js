const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347069482550,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_51_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MSxcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMixcbiAgICAgICAgNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NixcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQdjBNQnBIWVVFRWdmdEtDMlM5ZUIwVzBJUFBGWDJwZXlUSXduMjdVdm5VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSRG5hZ0JjalRvV0hHQzZNRG1kaE5BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNjMDU4YjY2LTliZjItNGQ2Mi1iZDdiLTgwNTNhNDUyZjRmOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxNDMsXG4gICAgICAxMDksXG4gICAgICAyMzUsXG4gICAgICAyMDksXG4gICAgICAxMTgsXG4gICAgICAxMTYsXG4gICAgICAyMTYsXG4gICAgICAxOTEsXG4gICAgICA0MSxcbiAgICAgIDc4LFxuICAgICAgMjQ2LFxuICAgICAgMjIyLFxuICAgICAgODksXG4gICAgICAyMTcsXG4gICAgICAxNzQsXG4gICAgICAxOTYsXG4gICAgICAxNjUsXG4gICAgICAxNjQsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE1NCxcbiAgICAgIDEzNyxcbiAgICAgIDEzNixcbiAgICAgIDE2MixcbiAgICAgIDIzOSxcbiAgICAgIDIzOSxcbiAgICAgIDE1MixcbiAgICAgIDIyMyxcbiAgICAgIDY5LFxuICAgICAgNjksXG4gICAgICAyNDAsXG4gICAgICAyNDIsXG4gICAgICAxMTAsXG4gICAgICAxMTQsXG4gICAgICA0LFxuICAgICAgMTQzLFxuICAgICAgMjM5LFxuICAgICAgMTEwLFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJNNENBSjNZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY5NDgyNTUwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDAyMTc5NDAzNTcyMjc6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1REL2V3R0VJZm5tYnNHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOWGM3YnA4bm5WLzVUaXRWSVJYYnMwcVgxTjJIWkNXWXRSVXlobFpxUVM0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9YR1lnM0ZWT29RM1Z3clp3UjZMdWNPTFdnd0Fha2IvM1Q2elR0TFNkRW5kNEdPYU5mcE1nQUZKemltazV1RWVMaUdwb3Z3eTQ5ME4yNzNmQkxIZURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJlUmxiWFVNaUsvd2RsUGR3RElpTFJNYWJvOGk5VUdqNFphVEZ0dWllMTVxblhkVmtwT1hNVTl0RFU2ZHQzZlppalNrYWlZQTZWQUxTZjdWWmlNT2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjk0ODI1NTA6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDc2NzQ5OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
