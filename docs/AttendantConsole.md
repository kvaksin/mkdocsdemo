# Factors Attendant Console — Test User Accounts & Feature Validation

## Test User Accounts

All test users share the same password:

> **Password:** <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div>

### User Table

| # | **User Email** | **Password** | Name | 
|-|------------------|--------------|---| 
|1| <div class="cell-flex"><span class="credentials-text">mrjpf3te24qz@imgfx.art</span><button class="icon-btn copy-btn" data-copy="mrjpf3te24qz@imgfx.art"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | Niroj |
|2| <div class="cell-flex"><span class="credentials-text">mrjphmgpktwu@animateany.com</span><button class="icon-btn copy-btn" data-copy="mrjphmgpktwu@animateany.com"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | Ramin |
|3| <div class="cell-flex"><span class="credentials-text">mrjphxcc0hd1@wanaivideogenerator.com</span><button class="icon-btn copy-btn" data-copy="mrjphxcc0hd1@wanaivideogenerator.com"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | Richard |
|4| <div class="cell-flex"><span class="credentials-text">mrjpfk5z7qh5@aniimate.net</span><button class="icon-btn copy-btn" data-copy="mrjpfk5z7qh5@aniimate.net"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | Jagraj |
|5| <div class="cell-flex"><span class="credentials-text">mrjpxf63otgq@animatimg.com</span><button class="icon-btn copy-btn" data-copy="mrjpxf63otgq@animatimg.com"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | Jens |
|6| <div class="cell-flex"><span class="credentials-text">mrjpxm11x2o3@aniimate.net</span><button class="icon-btn copy-btn" data-copy="mrjpxm11x2o3@aniimate.net"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | Arshdeep |
|7| <div class="cell-flex"><span class="credentials-text">mrjpxx1ti5rc@aniimate.net</span><button class="icon-btn copy-btn" data-copy="mrjpxx1ti5rc@aniimate.net"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | Richard Yuan |
|8| <div class="cell-flex"><span class="credentials-text">mrjpyblzt7kv@aifotoeditor.com</span><button class="icon-btn copy-btn" data-copy="mrjpyblzt7kv@aifotoeditor.com"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | |
|9| <div class="cell-flex"><span class="credentials-text">mrjqbtyq8g25@imgfx.art</span><button class="icon-btn copy-btn" data-copy="mrjqbtyq8g25@imgfx.art"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | |
|10| <div class="cell-flex"><span class="credentials-text">mrjqbhoh3gwm@animateany.com</span><button class="icon-btn copy-btn" data-copy="mrjqbhoh3gwm@animateany.com"><span class="md-icon material-icons">content_copy</span></button></div> | <div class="cell-flex"><span class="credentials-text">`C1sco123!`</span><button class="icon-btn copy-btn" data-copy="C1sco123!"><span class="md-icon material-icons">content_copy</span></button></div> | |

---

## Attendant Console Feature Test Plan

This section outlines the required steps for validating operator functionality in the Webex Attendant Console.

---

## 1. Access the Webex Attendant Console

1. Log in using any of the test accounts listed above.
2. Launch **Webex Attendant Console**.
3. Confirm the following panels load correctly:
   - Active Calls
   - Directory
   - Queues
   - Park Slots

!!! tip
    Bookmark the console URL for faster access during repeated testing.

---

## 2. Manage Contacts Using Customizable Tabs

Operators should validate directory management features:

- Switch between **list**, **grid**, and **compact** views.
- Confirm presence indicators display correctly.
- Use search to locate internal contacts.
- Validate responsiveness when switching tabs.

---

## 3. Creating and Organizing Custom Tabs

Test the ability to personalize the directory layout:

1. Create a new tab (e.g., *Support*, *Sales*, *Executives*).
2. Drag contacts into the new tab.
3. Reorder tabs by dragging.
4. Rename a tab.
5. Delete a tab and confirm it is removed from the layout.

!!! note
    Custom tabs help operators organize high‑volume call routing workflows.

---

## 4. Call Management

Validate basic call handling:

- Receive an inbound call.
- Answer the call.
- Place the call on **hold**.
- Resume the call.
- End the call.
- Confirm caller ID and queue information appear correctly.

---

## 5. Transfer a Call

### Blind Transfer

1. Select the active call.
2. Choose a directory contact.
3. Click **Blind Transfer**.
4. Confirm the call leaves your Active Calls panel.

### Consultative Transfer

1. Select the active call.
2. Click **Consult**.
3. Speak with the target.
4. Complete the transfer.

---

## 6. Fast Transfer

1. Configure a fast‑transfer destination.
2. Receive or place a call.
3. Trigger **Fast Transfer**.
4. Validate the call immediately routes to the preset target.

!!! tip
    Fast Transfer is ideal for reception workflows with predictable routing patterns.

---

## 7. Start a Conference Call

1. Place or receive a call.
2. Call a second test DN.
3. Merge both calls into a conference.
4. Drop one participant.
5. Confirm the conference continues with remaining participants.

---

## 8. Park a Call

### Parking

1. Select an active call.
2. Choose an available park slot.
3. Click **Park**.
4. Confirm the slot displays caller information.

### Retrieving

1. Log in with another test user.
2. Retrieve the parked call.
3. Confirm the park slot clears automatically.

---

## Completion

Once all steps are validated, operators should report:

- Any UI inconsistencies  
- Any failed call flows  
- Any unexpected routing behavior  

This ensures the Attendant Console is fully functional for production deployment.
