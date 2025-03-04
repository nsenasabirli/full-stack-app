import React from "react";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            };
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options);
            if (response.status === 200) {
                updateCallback();
            } else {
                console.error("Failed to delete");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contacts</h2>
            <table style={styles.table}>
                <thead>
                    <tr style={styles.tableHeaderRow}>
                        <th style={styles.tableHeader}>First Name</th>
                        <th style={styles.tableHeader}>Last Name</th>
                        <th style={styles.tableHeader}>Email</th>
                        <th style={styles.tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id} style={styles.tableRow}>
                            <td style={styles.tableCell}>{contact.firstName}</td>
                            <td style={styles.tableCell}>{contact.lastName}</td>
                            <td style={styles.tableCell}>{contact.email}</td>
                            <td style={styles.tableCell}>
                                <button
                                    onClick={() => updateContact(contact)}
                                    style={styles.updateButton}
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => onDelete(contact.id)}
                                    style={styles.deleteButton}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#333",
        marginBottom: "20px",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    tableHeaderRow: {
        backgroundColor: "#007bff",
        color: "#fff",
    },
    tableHeader: {
        padding: "12px",
        textAlign: "left",
    },
    tableRow: {
        borderBottom: "1px solid #ddd",
    },
    tableRowHover: {
        backgroundColor: "#f1f1f1",
    },
    tableCell: {
        padding: "12px",
        textAlign: "left",
    },
    updateButton: {
        padding: "6px 12px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginRight: "5px",
    },
    deleteButton: {
        padding: "6px 12px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default ContactList;