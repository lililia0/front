<template>
    <div class="footer__container">
        <h1 class="footer__logo">
            NEWS
        </h1>
        <div class="footer__nav">
            <div class="footer__grid-one">
                <ul class="footer__list">
                    <li class="footer__items">
                        Связаться с нами
                    </li>
                    <li class="footer__items">
                        allrussia.info@allrussia.info
                        info@allrussia.info
                    </li>
                    <li class="footer__items-big">
                        Свидетельство о регистрации средства массовой информации Эл № ФС77-66038 от 20 июня 2016г
                        Все права защищены. Портал «Вся Россия»
                    </li>
                </ul>
            </div>
            <div class="footer__grid-two">
                <p class="footer__title">Социальные сети</p>
                <ul class="footer__list-aye">
                    <li class="footer__items-aye">
                        Telegram
                    </li>
                    <li class="footer__items-aye">
                        Youtube
                    </li>
                    <li class="footer__items-aye">
                        Facebook*
                    </li>
                    <li class="footer__items-aye">
                        Livejournal
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyFooter"
}
</script>

<style scoped>
.footer__container {
    background: #333333;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: rgba(255, 255, 255, 1);
    height: 281px;
}
.footer__nav{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
.footer__logo {
    font-weight: 900;
    font-size: 80px;
    line-height: 94px;
    color: #FFFFFF;
    margin: 0;
    padding-left: 100px;
    padding-top: 30px;
}
.footer__list li {
    list-style-type: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 1);

}
.footer__list li:not(:last-child) {
    margin-bottom: 17px;
}
.footer__list-aye {
    display: flex;
    flex-flow: row nowrap;
}
.footer__list-aye li {
    margin-right: 10px;
    list-style-type: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
}
.footer__list-aye  {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
}
.footer__title{
    border-bottom: 1px solid rgba(255, 255, 255, 1);
}

</style>