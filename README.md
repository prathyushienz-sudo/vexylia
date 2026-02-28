<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [SMART EVENT NOTIFIER] 🎯

## Basic Details

### Team Name: [VEXYLIA]

### Team Members
- Member 1: [AMNA HUDHA CP ] - [T K M COLLEGE OF ENGINEERING]
- Member 2: [PRATHYUHA P] - [T K M COLLEGE OF ENGINEERING ]

### Hosted Project Link
[https://vexylia.onrender.com/dash.html]

### Project Description
[CampusConnect is a smart college events notification platform that helps students discover, track, and register for campus events easily. Clubs can post events with posters and descriptions, while students get personalized feeds, reminders, and urgency alerts.]

### The Problem statement
[In colleges, students often miss events because information is scattered across WhatsApp groups, posters, and social media. There is no centralized platform where all clubs can post events and students can track them efficiently.]

### The Solution
[CampusConnect provides a centralized web platform where:

Clubs can log in and post events with posters and descriptions.

Students can log in to view, filter, and register for events.

Smart reminders and urgency indicators help students never miss important events.]

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: [JavaScript,HTML,CSS]
- Frameworks used: [None (Built using Vanilla JS for lightweight performance)]
- Libraries used: []
- Tools used: [VS Code,Git & GitHub ,Vercel (Hosting) ,MongoDB Atlas]



## Features

List the key features of your project:
- Feature 1: [Club Login & Event Posting
Clubs can securely log in and upload event posters, descriptions, date, and registration links.]
- Feature 2: [Student Login & Personalized Feed
Students can log in and see events based on their interests.]
- Feature 3: [Smart Reminders & Urgency Indicator
Events happening today are highlighted. Countdown timer shows days left.]
- Feature 4: [Full Poster View & Registration
Students can click on an event to view full poster, detailed description, and register instantly.]

---

## Implementation

### For Software:

#### Installation
```bash
[git clone https://github.com/your-repo-name.git
cd smart-event-notifier]
```

#### Run
```bash
[node server.js]
```



## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![<img width="1778" height="855" alt="image" src="https://github.com/user-attachments/assets/5e73f5c4-fd80-4299-a153-761484354ad4" />
](login page)
*This is the login page.It was designed like both student and clubs can use.Clubs can post their events by entering the website by using their club names and password we give.Student can login using college id and view posters and know about the events.*

![<img width="1866" height="905" alt="image" src="https://github.com/user-attachments/assets/404651ac-e7b7-4be5-b9ac-bffebb0a597d" />
](Student login interface)
*In student login page it was designed like that the events are sorted based on how may days left.the event happening today is marked as live session.they can also give their preference ,so they will get notified whjen any events based on their preference is coming*

![<img width="1871" height="881" alt="image" src="https://github.com/user-attachments/assets/d3319630-0285-4102-861f-0240ce14aa3d" />](
club login page)
*in club login page they can login with respective password then the page goes to club page were they can add events notify live options are there based on the preference in which type of event is occuring , home view like instagram*

#### Diagrams

**System Architecture:**

Architecture Explanation

Frontend built using HTML, CSS, JavaScript

Backend (if enabled) handles authentication & event storage

MongoDB Atlas stores event data

Hosted on Render

Data Flow

User → Frontend UI → Backend API → Database
Database → Backend → Frontend Display

**Application Workflow:**

![<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/9b237165-633c-4247-ba83-02e63ff5817b" />
]
User selects role (Student / Club).

Login or Register.

Club uploads event details.

Event stored in database.

Students view events.

Urgency logic highlights events near deadline.

Student clicks event → views full details → registers.

---

### For Hardware:


#### Build Photos


---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[https://drive.google.com/drive/folders/1ZyeKea9F5cHlUUXkFsNo95oodBDkgeGq]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
