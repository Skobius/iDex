<template>
    <div class="year" :id="id">
        <div class="vocation__first">
            <img :src="'images/' + photo + '.png'" alt="photo" class="vocation__photo">
            <span class="vocation__name">
                 {{ name }}
            </span>
        </div>
        <span class="vocation__text">
            {{ all }}
        </span>
        <div class="month" v-for="month in yearData">
            <div class="week" v-for="week in month.weeks">
                <div class="day" v-for="day in 7" :class="{[`week-day-${day}`]: true}">
                    <span v-if="week[day]">{{week[day].date.getDate()}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .week-day-7 {
        color: red;
    }
    .week {
        display: flex;
        flex-direction: column;
    }
    .week:not(:last-child) {
        margin-right: 2px;
    }
    .day {
        width: 0.5rem;
        height: 2.28px;
        background: #F6F6F6;
    }
    .day span {
        opacity: 0;
    }
    .day--active {
        background: #EAF9FF;
    }
    .year {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background: #fff;
        width: 98%;
        padding: 9px 0;
        border-bottom: 1px solid #F7F7F7;
    }
    .month {
        width: 6.807%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<script>
    import moment from 'moment'
    require('moment/locale/ru.js');
    export default {
        props: {
            year: {  // год на который строится календарь
                type: Number,
                default: (new Date()).getFullYear()
            },
            id: {
              type: String
            },
            name: {
                type: String
            },
            all: {
                type: String
            },
            photo: {
                type: String
            },
            vocation: {
                type: Object
            }
        },
        mounted: function (element) {
            let mainYear = this.id;

            let day = $('.day');

            $('#' + mainYear).find(day).each(function () {
                if ($(this).html() === '<!---->') {
                    $(this).addClass('day--transparent');
                }
            });

            let now = new Date();
            let nowMonth = now.getMonth() - 1;
            let month = $('.month');

            $('#' + mainYear).each(function () {
                $(this).find(month).each(function (i) {
                    if (i == nowMonth) {
                        $(this).find(day).each(function () {
                            $(this).addClass('day--active')
                        });
                    }

                    if (i > nowMonth) {
                        $(this).find(day).each(function () {
                            $(this).addClass('day--active')
                        });
                    }
                });
            });


            for(let i= 0; i < this.vocation.length ; i++) {
                let dataAllStart = this.vocation[i].start.split('.');
                let dataAllFinish = this.vocation[i].finish.split('.');
                let dataMonthStart = dataAllStart[1] ;
                let dataDayStart = dataAllStart[0];
                let dataMonthFinish = dataAllFinish[1];
                let dataDayFinish = dataAllFinish[0];
                let color = this.vocation[i].color;

                let name = this.name;
                let photo = this.photo;
                let start = this.vocation[i].start;
                let finish = this.vocation[i].finish;
                let year = this.year;
                let text = this.vocation[i].text;

                if (dataMonthStart == dataMonthFinish) {
                    $('#' + mainYear).each(function () {
                        if ($(this).attr('id') == this.id) {
                            $(this).find('.month').each(function (i) {
                                if (i == parseInt(dataMonthStart) - 1) {
                                    $(this).find('.day').each(function (i) {
                                        if (i >= parseInt(dataDayStart) + 1 && i <= parseInt(dataDayFinish) + 1) {
                                            $(this).addClass('day--color-' + color).addClass('js-day-hover');
                                        }

                                        if (i == parseInt(dataDayStart) + 1) {
                                            $(this).append(`
                                                <div class="people-info">
                                                    <div class="people-info__top">
                                                        <img src="images/${photo}.png" alt="photo" class="people-info__photo">
                                                        <span class="people-info__name">
                                                         ${name}
                                                        </span>
                                                    </div>
                                                    <div class="people-info__inner">
                                                        <span class="people-info--color-block day--color-${color}"></span><span>${start}.${year}-${finish}.${year}(14д.)</span>
                                                    </div>
                                                    <div class="people-info__bottom">
                                                        ${text}
                                                    </div>
                                                </div>
                                            `)
                                        }
                                    });
                                }
                            })
                        }
                    });
                } else if (dataMonthStart < dataMonthFinish) {
                    $('#' + mainYear).each(function () {
                        if ($(this).attr('id') == this.id) {
                            $(this).find('.month').each(function (i) {
                                if (i == parseInt(dataMonthStart) - 1) {
                                    $(this).find('.day').each(function (i) {
                                        if (i >= parseInt(dataDayStart)) {
                                            $(this).addClass('day--color-' + color).addClass('js-day-hover');
                                        }

                                        if (i == parseInt(dataDayStart) + 1) {
                                            $(this).append(`
                                                <div class="people-info">
                                                    <div class="people-info__top">
                                                        <img src="images/${photo}.png" alt="photo" class="people-info__photo">
                                                        <span class="people-info__name">
                                                         ${name}
                                                        </span>
                                                    </div>
                                                    <div class="people-info__inner">
                                                        <span class="people-info--color-block day--color-${color}"></span><span>${start}.${year}-${finish}.${year}</span>
                                                    </div>
                                                    <div class="people-info__bottom">
                                                        ${text}
                                                    </div>
                                                </div>
                                            `)
                                        }
                                    });
                                }

                                if (i == parseInt(dataMonthFinish) - 1) {
                                    $(this).find('.day').each(function (i) {
                                        if (i <= parseInt(dataDayStart)) {
                                            $(this).addClass('day--color-' + color).addClass('js-day-hover');;
                                        }
                                    });
                                }
                            })
                        }
                    });
                }
            }
        },
        computed: {
            weekDays () {
                let days = [];
                for(let i = 1; i<=7;++i) {
                    days.push(moment().isoWeekday(i).format("dd"))
                }
                return days;
            },
            yearData() {
                let data = [];
                for (let m = 0; m < 12; ++m) {
                    let day = moment({year: this.year, month: m, day: 1}); // формируем дату на первый день каждого месяца
                    let daysInMonth = day.daysInMonth(); // количество дней в месяце
                    let month = { // готовим объект месяца
                        title: day.format("MMMM"),
                        weeks: {},
                    };
                    // итерируем по количеству дней в месяце
                    for (let d = 0; d < daysInMonth; ++d) {
                        let week = day.week();
                        // небольшой хак, момент считает
                        // последние дни декабря за первую неделю,
                        // но мне надо чтобы считалось за 53
                        if (m === 11 && week === 1) {
                            week = 53
                        }
                        // если неделя еще не присутствует в месяце, то добавляем ее
                        if (!month.weeks.hasOwnProperty(week)) {
                            month.weeks[week] = {}
                        }
                        // добавляем день, у weekday() нумерация с нуля,
                        // поэтому добавляю единицу, можно и не добавлять,
                        // но так будет удобнее
                        month.weeks[week][day.weekday() + 1] = {
                            date: day.toDate(),
                        };
                        // итерируем день на единицу, moment мутирует исходное значение
                        day.add(1, 'd');
                    }
                    // добавлям данные по месяцу в год
                    data.push(month);
                }
                return data
            }
        }
    }


</script>
