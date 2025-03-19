import csv
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample projects data for the Portfolio page
projects = [
    {
        "title": "Myntra Clone",
        "description": (
            "An e-commerce platform clone featuring user registration"
            "product listings, a shopping cart, secure checkout, and "
            "responsive design."
        ),
        "image": "Myntra Clone.png",
        "link": "https://sandesh-projects.github.io/IP-lab-work/Practice%20Myntra%20Clone/myntra.html"
    },
    {
        "title": "Mentorlink App",
        "description": (
            "A mentorship platform connecting students and professionals. "
            "Key features will include messaging, scheduling, and progress "
            "tracking for mentorship sessions. (Under development)"
        ),
        "image": "quiz.jpg",
        "link": "#"
    },
    {
        "title": "Bat Ball and Stump",
        "description": (
            "A fun twist on Rock-Paper-Scissors with a cricket theme. "
            "Bat beats Ball, Ball beats Stump, and Stump beats Bat. "
            "Features interactive gameplay, simple UI, and scoreboard tracking."
        ),
        "image": "batballstump.png",
        "link": "https://sandesh-projects.github.io/IP-lab-work/Bat%20Ball%20Stump%20optimize/batBallStump.html"
    }
]

# 1. Read all contacts from CSV
def read_contacts():
    contacts = []
    try:
        with open('contact.csv', 'r', newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                contacts.append(row)
    except FileNotFoundError:
        # If contact.csv doesn't exist yet, just return an empty list
        pass
    return contacts

# 2. Write the entire contacts list to CSV
def write_contacts(contacts):
    with open('contact.csv', 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['id', 'name', 'email', 'subject', 'message']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for contact in contacts:
            writer.writerow(contact)

# 3. Get the next ID for a new contact
def get_next_id(contacts):
    if not contacts:
        return 1
    max_id = max(int(contact['id']) for contact in contacts)
    return max_id + 1

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/portfolio')
def portfolio():
    # Pass the projects list to the template
    return render_template('portfolio.html', projects=projects)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Retrieve form data
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')

        # Read existing contacts
        contacts = read_contacts()

        # Prepare new entry with a unique ID
        new_id = get_next_id(contacts)
        new_contact = {
            'id': str(new_id),
            'name': name,
            'email': email,
            'subject': subject,
            'message': message
        }

        # Append and write back to CSV
        contacts.append(new_contact)
        write_contacts(contacts)

        # Redirect to the success page, passing data via query parameters
        return redirect(url_for('success', name=name, email=email, subject=subject, message=message))
    
    return render_template('contact.html')

@app.route('/success')
def success():
    # Retrieve data from query parameters
    name = request.args.get('name')
    email = request.args.get('email')
    subject = request.args.get('subject')
    message = request.args.get('message')
    return render_template('success.html', name=name, email=email, subject=subject, message=message)

# 4. New route to list all contact requests
@app.route('/requests')
def list_requests():
    contacts = read_contacts()
    return render_template('requests.html', contacts=contacts)

# 5. Route to delete a contact by ID
@app.route('/delete/<int:contact_id>')
def delete_contact(contact_id):
    contacts = read_contacts()
    # Filter out the contact with matching ID
    updated_contacts = [c for c in contacts if int(c['id']) != contact_id]
    write_contacts(updated_contacts)
    return redirect(url_for('list_requests'))

if __name__ == '__main__':
    app.run(debug=True)
