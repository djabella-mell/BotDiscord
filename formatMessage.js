// Fonction pour formater les messages individuels
function formatMessage(message, index) {
    return `From User: ${message[1]}\nMessage ${index + 1} ${new Date(message[2]).toLocaleString()}
}
`;
}
