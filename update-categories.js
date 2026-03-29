const fs = require('fs');
const path = require('path');

const categoryMap = {
    "Racing": ["Forza", "Need for Speed", "Gran Turismo", "The Crew", "F1", "Dirt", "WRC", "Assetto", "Motorfest"],
    "Fighting": ["Mortal Kombat", "UFC", "WWE", "Tekken", "Street Fighter", "Dragon Ball"],
    "Adventure": [
        "God of War", "Red Dead", "Ghost of", "Resident Evil", "Spider-Man", 
        "Assassin's", "Elden Ring", "Hogwarts", "Uncharted", "It Takes Two", 
        "Silent Hill", "Alan Wake", "Detroit", "Last of", "Tomb Raider", "Miles Morales", "Wukong", "Crash"
    ]
};

function updateCategoryInContent(content) {
    let lines = content.split('\n');
    let currentTitle = null;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        let titleMatch = line.match(/^\s*title:\s*["']([^"']+)["']/);
        if (titleMatch) {
            currentTitle = titleMatch[1];
        }

        let categoryMatch = line.match(/^(\s*category:\s*["'])([^"']+)(["'],?.*)$/);
        if (categoryMatch && currentTitle) {
            let newCat = categoryMatch[2]; // Default to current
            for (const [cat, keywords] of Object.entries(categoryMap)) {
                if (keywords.some(kw => currentTitle.toLowerCase().includes(kw.toLowerCase()))) {
                    newCat = cat;
                    break;
                }
            }
            
            if (newCat !== categoryMatch[2]) {
                console.log(`Updating '${currentTitle}': ${categoryMatch[2]} -> ${newCat}`);
                lines[i] = categoryMatch[1] + newCat + categoryMatch[3];
            }
            currentTitle = null; // Reset for next object
        }
    }
    return lines.join('\n');
}

['js/main.js', 'backend/seed.js'].forEach(file => {
    let filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        console.log(`Processing ${file}...`);
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = updateCategoryInContent(content);
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${file} successfully!\n`);
        } else {
            console.log(`${file} unchanged.\n`);
        }
    }
});

console.log('Categories updated successfully!');
