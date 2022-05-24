var faker = require('faker')
var cpf= require('gerador-validador-cpf')


export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '84998791054',
            address: {
                postalcode: '59063070',
                street: 'Rua São José de Mipibu',
                number: '1504',
                details: 'casa 2',
                district: 'Lagoa Nova',
                city_state: 'Natal/RN'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}