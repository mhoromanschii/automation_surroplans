const { xpathSelector } = require('./_common.js');

//Menu overlay
module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    commands: [{
        //header menu top items
        selectTab: function(selector) {
            this
                .waitForElementVisible(selector)
                .click(selector)
            this.api.pause(this.api.globals.testData.PAUSE_TIME_DOUBLED);
            return this;
        },
        logout: function() {
            this
                .pause(this.api.globals.testData.PAUSE_TIME_DOUBLED)
                .waitForElementVisible('')
                .click('')
            this.api.pause(this.api.globals.testData.PAUSE_TIME);
            return this;
        }
    }],
    elements: {

        headerTopMainMenu: xpathSelector("//*[@class='menu menu-main ']"),

        summaryTable: xpathSelector("//*[@class='menu menu-main ']//a[text() = 'Сводная таблица']"),
        companyAndUsers: xpathSelector("//*[@class='menu menu-main ']//a[text() = 'Компании и пользователи']"),
        allCompany: xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Все компании']"),
        allUsers: xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Все пользователи']"),
        blackList: xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Черный список компаний']"),
        claims: xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Лента отзывов и претензий']"),
        news: xpathSelector("//*[@class='menu menu-main ']//*[@class='has-sublevel']//a[text() = 'Новости']"),
        ads: xpathSelector("//*[@class='menu menu-main ']//*[@class='has-sublevel']//a[text() = 'Объявления']"),
        forum: xpathSelector("//*[@class='menu menu-main ']//a[text() = 'Форум']"),
        useful:  xpathSelector("//*[@class='menu menu-main ']//*[@class='has-sublevel']//a[text() = 'Полезное']"),
        map:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Карта']"),
        legislation:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Законодательство']"),
        distanceCalculation:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Расчёт расстояния']"),
        trafficRestrictions:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Ограничения движения грузовиков']"),
        permissibleWeightsAndSizes:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Допустимые веса и размеры грузовиков']"),
        publicHolidays:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Публичные праздники']"),
        currencyConverter:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Конвертор  валют']"),
        schengenCalculator:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Шенген-калькулятор']"),
        fuelPrices:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Цены на топливо']"),
        about:  xpathSelector("//*[@class='menu menu-main ']//*[@class='has-sublevel']//a[text() = 'О сайте']"),
        us:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'О нас']"),
        rules:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Правила размещения информации']"),
        termsOfUse:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Пользовательское соглашение']"),
        advertising:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Реклама на сайте']"),
        faq:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'FAQ']"),
        prices:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Цены']"),
        contacts:  xpathSelector("//*[@class='menu menu-main ']//*[@class='sublevel']//a[text() = 'Контакты']"),

    },
    data: {
        summaryTable: '/summary-table',
        companyAndUsers: '/company',
        allCompany: '/company',
        allUsers: '/users',
        blackList: '/blacklist',
        claims: '/claims',
        news: '/news',
        ads: '/ads',
        forum: '/forum',
        useful: '/useful',
        map: '/map',
        legislation: '/legislation',
        distanceCalculation: '/distance-calculation',
        trafficRestrictions: '/traffic-restrictions',
        permissibleWeightsAndSizes: '/permissible-weights-and-sizes',
        publicHolidays: '/public-holidays',
        currencyConverter: '/currency-converter',
        schengenCalculator: '/schengen-calculator',
        fuelPrices: '/fuel-prices',
        about: '/about',
        us: '/us',
        rules: '/rules',
        termsOfUse: '/terms-of-use',
        advertising: '/advertising',
        faq: '/faq',
        prices: '/prices',
        contacts: '/contacts',
    }
};