import React, { useState } from "react";

const baseTasks = [
  // 9-12 MONTHS IN ADVANCE
  {
    days: 365,
    task:
      "Get inspired. Browse wedding magazines, blogs, Instagram, and Pinterest"
  },
  { days: 360, task: "Determine your wedding budget" },
  { days: 355, task: "Finalize wedding date" },
  { days: 350, task: "Reserve ceremony and reception venues" },
  { days: 345, task: "Hire a wedding planner, if you choose to use one" },
  { days: 340, task: "Create your guest list; collect mailing addresses" },
  { days: 335, task: "Create a wedding website" },
  { days: 330, task: "Order and send engagement party invitations" },
  { days: 325, task: "Choose wedding attendants" },
  {
    days: 320,
    task: "Start shopping for wedding dress/attire and accessories"
  },
  { days: 315, task: "Book caterer" },
  { days: 310, task: "Book photographer and videographer" },
  { days: 305, task: "Book florist" },
  { days: 300, task: "Book cake designer" },
  { days: 295, task: "Take engagement photos" },
  { days: 290, task: "Reserve hotel-room blocks for out-of-town guests" },

  // 6-8 MONTHS IN ADVANCE
  { days: 240, task: "Order and send save the dates" },
  { days: 235, task: "Request wedding invitation samples" },
  { days: 230, task: "Book officiant" },
  { days: 225, task: "Book music for ceremony and reception" },
  { days: 220, task: "Book hair and makeup artists" },
  { days: 215, task: "Book lighting company" },
  {
    days: 210,
    task: "Reserve rental equipment, such as tables, chairs, and tents"
  },
  { days: 205, task: "Choose attendants' attire" },
  { days: 200, task: "Register for gifts" },
  { days: 195, task: "Book the honeymoon" },

  // 3-5 MONTHS IN ADVANCE
  { days: 150, task: "Order wedding invitations" },
  {
    days: 145,
    task: "Order wedding thank you cards and write them as gifts arrive"
  },
  {
    days: 140,
    task:
      "Send wedding shower and bachelor/bachelorette party guest list to host(s)"
  },
  { days: 135, task: "Book rehearsal-dinner venue" },
  { days: 130, task: "Arrange transportation for the wedding day" },
  { days: 125, task: "Book a room for wedding night" },
  {
    days: 120,
    task: "Do a menu tasting and finalize the reception menu with your caterer"
  },
  { days: 115, task: "Do a cake tasting and order your cake" },
  { days: 110, task: "Choose music for the ceremony and reception" },
  { days: 105, task: "Purchase wedding rings" },

  // 2 MONTHS IN ADVANCE
  { days: 60, task: "Send wedding invitations" },
  { days: 58, task: "Update details on your wedding website" },
  { days: 56, task: "Schedule ceremony rehearsal time and rehearsal dinner" },
  { days: 54, task: "Order and send rehearsal dinner invitations" },
  { days: 52, task: "Discuss ceremony details with officiant" },
  { days: 50, task: "Order ceremony programs, menus and wedding signs" },
  {
    days: 48,
    task:
      "Begin writing your wedding vows, if you choose to say personalized vows"
  },
  { days: 46, task: "Try out makeup and hairstyle" },
  { days: 44, task: "Select gifts for wedding party and parents" },
  { days: 42, task: "Order wedding favors" },
  { days: 40, task: "Check in with wedding party members about their attire" },

  // 1 MONTH IN ADVANCE
  { days: 30, task: "Pay any remaining vendor balances in full" },
  { days: 28, task: "Order table numbers, escort cards, and place cards" },
  { days: 26, task: "Order wedding favor tags and favor stickers" },
  {
    days: 24,
    task: "Obtain marriage license and order additional certified copies"
  },
  {
    days: 22,
    task: "Create a wedding-day schedule and send to wedding party and vendors"
  },
  {
    days: 20,
    task:
      "Create a reception seating plan; organize escort cards and place cards"
  },
  { days: 18, task: "Break in your wedding shoes" },

  // 2 WEEKS IN ADVANCE
  {
    days: 14,
    task: "Have final dress/attire fitting with shoes and accessories"
  },
  { days: 13, task: "Follow up with any invitees who have not RSVPed" },
  { days: 12, task: "Notify caterer of guest count" },
  { days: 11, task: "Write toasts for rehearsal dinner and wedding reception" },
  {
    days: 10,
    task: "Organize and put together welcome bags for out-of-town guests"
  },

  // 1 WEEK IN ADVANCE
  { days: 7, task: "Finalize reception seating plan" },
  { days: 6, task: "Update caterer with final guest and vendor meal counts" },
  {
    days: 5,
    task: "Assign specific responsibilities to wedding party members"
  },
  {
    days: 4,
    task: "Confirm transportation arrangements for ceremony and reception"
  },
  { days: 3, task: "Practice reading your wedding vows aloud" },
  { days: 2, task: "Pack for honeymoon" },

  // 1 DAY IN ADVANCE
  { days: 1, task: "Get a manicure and pedicure" },
  { days: 1, task: "Pack for the wedding day" },
  {
    days: 1,
    task: "Prepare tip and payment envelopes for officiant and vendors"
  },
  { days: 1, task: "Rehearse ceremony" },
  {
    days: 1,
    task:
      "Hold rehearsal dinner; give gifts to wedding party members and parents"
  },

  // WEDDING DAY
  { days: 0, task: "Relax, be present, and have the time of your lives!" }
];

function WeddingPlannerApp() {
  const [weddingDate, setWeddingDate] = useState("");
  const [accessories, setAccessories] = useState([]);
  const [newAccessoryName, setNewAccessoryName] = useState("");
  const [newAccessoryTime, setNewAccessoryTime] = useState("");

  const handleDateChange = (e) => {
    setWeddingDate(e.target.value);
  };

  const handleAddAccessory = () => {
    if (newAccessoryName && newAccessoryTime) {
      setAccessories([
        ...accessories,
        { name: newAccessoryName, processingTime: newAccessoryTime }
      ]);
      setNewAccessoryName("");
      setNewAccessoryTime("");
    }
  };

  const handleRemoveAccessory = (index) => {
    setAccessories(accessories.filter((_, i) => i !== index));
  };

  const calculateRoadmap = () => {
    if (!weddingDate) return [];

    const wedding = new Date(weddingDate);
    const today = new Date();
    const daysUntilWedding = Math.ceil(
      (wedding - today) / (1000 * 60 * 60 * 24)
    );

    let tasks = [...baseTasks];

    accessories.forEach((accessory) => {
      tasks.push({
        days: parseInt(accessory.processingTime) + 14,
        task: `Order the ${accessory.name} accessory from JONIDA RIPANI`
      });
    });

    return tasks
      .filter((task) => task.days <= daysUntilWedding)
      .sort((a, b) => b.days - a.days)
      .map((task) => {
        const deadline = new Date(wedding);
        deadline.setDate(deadline.getDate() - task.days);
        return { ...task, deadline: deadline.toLocaleDateString() };
      });
  };

  const roadmap = calculateRoadmap();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px"
      }}
    >
      {/* L'elemento H1 con il titolo è stato rimosso da qui */}

      <div style={{ marginBottom: "20px" }}>
        <h2>Add Accessories</h2>
        <input
          type="text"
          value={newAccessoryName}
          onChange={(e) => setNewAccessoryName(e.target.value)}
          placeholder="Accessory name"
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          value={newAccessoryTime}
          onChange={(e) => setNewAccessoryTime(e.target.value)}
          placeholder="Processing time (days)"
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddAccessory}>Add</button>
      </div>

      <div>
        {accessories.map((accessory, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            {accessory.name} (Processing time: {accessory.processingTime} days)
            <button
              onClick={() => handleRemoveAccessory(index)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Select Wedding Date</h2>
        <input type="date" value={weddingDate} onChange={handleDateChange} />
      </div>

      {roadmap.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Wedding Planning Roadmap</h2>
          <ul>
            {roadmap.map((item, index) => (
              <li key={index}>
                {item.task} (by {item.deadline})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeddingPlannerApp;
