# WeightTracker

A very simple web project for tracking weight data.

## How it works

Main features:

- **Add weight**
- **Edit entries**
- **Delete entries**
- **Export data (CSV)**

All data is shown in a list, newest first.

## Technical Details

- **Frontend:** Plain HTML, CSS, and JavaScript (no frameworks)
- **Database:** Firebase Firestore (NoSQL, cloud-hosted)
- **Data Flow:**
	- On page load, all weight entries are fetched from Firestore and displayed.
	- Adding a weight creates a new document in the `weights` collection with the current date and value.
	- Editing or deleting updates or removes the corresponding document in Firestore.
	- Data is always retrieved and displayed sorted by date (newest first).
- **Firebase Integration:**
	- The Firebase configuration is stored in `firebase-config.js`.
	- Firestore is accessed via the Firebase JavaScript SDK (compat version).
- **CSV Export:**
	- All entries are fetched from Firestore, converted to CSV format, and offered as a file download in the browser.