<template>
    <div>
        <table class="vocation__table">
            <tr>
                <th>Фамилия, Имя</th>
                <th>дней</th>
                <th>Янв</th>
                <th>Фев</th>
                <th>Мар</th>
                <th>Апр</th>
                <th>Май</th>
                <th>Июн</th>
                <th>Июл</th>
                <th>Авг</th>
                <th>Сен</th>
                <th>Окт</th>
                <th>Ноя</th>
                <th>Дек</th>
            </tr>
        </table>
        <calendar :year="year" :id="people.id" :name="people.name" :all="people.allvacation" :photo="people.photo" :vocation="people.vocation" v-for="people in peoples"></calendar>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                year: 2020,
                peoples: [
                    {
                        id: '0001',
                        name: 'Иванов Иван',
                        allvacation: '14/28',
                        photo: 'photo',
                        vocation: [
                            {
                                start: '10.04',
                                finish: '14.05',
                                color: 'red',
                                text: 'отпуск'
                            },
                            {
                                start: '10.08',
                                finish: '24.08',
                                color: 'yellow',
                                text: 'пропуск'
                            }
                        ]
                    },
                    {
                        id: '0002',
                        name: 'Катерина Иванова',
                        allvacation: '14/28',
                        photo: 'photo-2',
                        vocation: [
                            {
                                start: '20.04',
                                finish: '30.04',
                                color: 'red',
                                text: 'больничный'
                            },
                            {
                                start: '20.08',
                                finish: '30.08',
                                color: 'green',
                                text: 'отпуск'
                            }
                        ]
                    },
                    {
                        id: '0003',
                        name: 'Антонов Антон',
                        allvacation: '20/28',
                        photo: 'photo',
                        vocation: [
                            {
                                start: '01.02',
                                finish: '05.02',
                                color: 'green',
                                text: 'отпуск'
                            },
                            {
                                start: '20.06',
                                finish: '14.07',
                                color: 'yellow',
                                text: 'пропуск'
                            },
                            {
                                start: '01.12',
                                finish: '02.12',
                                color: 'red',
                                text: 'больничный'
                            }
                        ]
                    },
                    {
                        id: '0004',
                        name: 'Антонов Антон',
                        allvacation: '20/28',
                        photo: 'photo',
                        vocation: [
                            {
                                start: '11.09',
                                finish: '25.09',
                                color: 'green',
                                text: 'отпуск'
                            }
                        ]
                    },
                    {
                        id: '0005',
                        name: 'Антонов Антон',
                        allvacation: '20/28',
                        photo: 'photo',
                        vocation: [
                            {
                                start: '21.02',
                                finish: '25.02',
                                color: 'green',
                                text: 'отпуск'
                            },
                        ]
                    }
                ]
            }
        }
    }
</script>
