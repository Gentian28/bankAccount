const days = ['E diele', 'E hene', 'E marte', 'E merkure', 'E enjte', 'E premte', 'E shtune'];
const months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nentor', 'Dhjetor'];

export default function formatDate() {
    const dateTime = new Date();

    const date = dateTime.getDate();
    const month = months[dateTime.getMonth()];
    const year = dateTime.getFullYear();

    let hour = String(dateTime.getHours());
    if (hour.length === 1) {
        hour = '0' + hour;
    }
    let minute = String(dateTime.getMinutes());
    if (minute.length === 1) {
        minute = '0' + minute;
    }
    let second = String(dateTime.getSeconds());
    if (second.length === 1) {
        second = '0' + second;
    }

    const day = days[dateTime.getDay()];
    const fullDate = `${date} ${month} ${year}`;
    const time = `${hour}:${minute}:${second}`;

    const formatedDate = `${day}, ${fullDate}, ${time}`;

    return formatedDate;
}