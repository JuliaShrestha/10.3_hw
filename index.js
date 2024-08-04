/*
Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. 
Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та 
метод для додавання нових контактів.
*/

const contactBook = {

    contacts: [
        {
            name: 'Sarah',
            phoneNumber: '+(099)523-14-78',
            email: 'sarah12.@gmail.com'
        },
        {
            name: 'Jessica',
            phoneNumber: '+(096)031-42-53',
            email: 'jessica72.@gmail.com'
        },
        {
            name: 'Daniel',
            phoneNumber: '+(097)297-20-83',
            email: 'daniel21.@gmail.com'
        }
    ],

    findContactByName (name) {

        return this.contacts.find(contact => contact.name === name);
    },

    addNewContacts (name, phoneNumber, email) {
        const newContact = {name, phoneNumber, email};
        this.contacts.push(newContact);
    }

}

console.log(contactBook.findContactByName('Jessica'));
contactBook.addNewContacts('Amelie', '+(093)777-44-25', 'Amelie25.@gmail.com');

console.log(contactBook.contacts);