<template>
  <!-- eslint-disable max-len -->
  <div>
    <article class="bg-background-secondary rounded-md">
      <div class="px-4 py-6 sm:px-16 sm:py-10">
        <header>
          <div class="mb-5">
            <button class="px-4 py-2 bg-blue-500 text-white mr-4">Интернет</button>
            <span class="text-blue-600">Владислав Войтенко</span>
          </div>
          <h1 class="text-copy-primary mb-3 text-3xl font-semibold">SpaceX launched the original Dragon cargo capsule on its last flight to the ISS</h1>
          <div class="mb-5">
            <time class="text-blue-600 text-sm font-medium">9/02/2020 в 15:03</time>
          </div>
        </header>
        <section class="post-content">
          <p class="text-copy-secondary mb-6">
            Last night, the space corporation Ilona Mask SpaceX successfully launched the Falcon 9 launch vehicle with the Dragon cargo capsule and two tons of payload for three crew members living in orbit. It is noteworthy that this flight will be the last for the original Dragon.
          </p>
          <figure class="-mx-4 sm:-mx-16 mt-8 my-12">
            <img src="https://kod.ru/content/images/2020/03/image-57.png" class="kg-image">
            <figcaption class="text-copy-secondary text-center mt-4">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Falcon 9 starts from Cape Canaveral, sending the last Dragon 1 into orbit. </font>
                  <font class="" style="vertical-align: inherit;">Photo: NASA / Kim Shiflett</font>
              </font>
            </figcaption>
          </figure>
          <p class="text-copy-secondary mb-6">
            With the next launch, NASA SpaceX will start using the new cargo module, called Dragon 2. For the needs of NASA, the new capsule is similar in appearance to the Crew Dragon, which SpaceX plans to use to deliver people into orbit. It is slightly larger than its predecessor and holds 20% more cargo. In addition, one Dragon 2 can be used up to five times, while the original "Dragon" was used no more than three.
          </p>
          <p class="text-copy-secondary mb-6">Технически TON Sites похожи на обычные сайты, но получение доступа к ним происходит через сеть TON. Она является оверлейной сетью внутри Интернета, а не проходящей через Интернет. У каждого такого сайта есть ADNL-адрес, заменяющий привычные IPv4 или IPv6. HTTP-запросы вместо TCP/IP принимаются через основанный на ADNL протокол RLDP — это протокол RPC более высокого уровня. Необходимости в HTTPS нет, так как шифрование обрабатывается ADNL.</p>
          <p class="text-copy-secondary mb-6">Доступ к существующим TON Sites и создание новых сайтов на базе TON возможен путём использования специальных шлюзов между классическим Интернетом и сетью TON. Де-факто доступ осуществляется с помощью HTTP —&gt; RLDP-прокси, который работает локально на клиентской машине. Сайты создаются с помощью обратного RLDP —&gt; HTTP-прокси, который работает на удалённом сервере. </p>
          <blockquote class="border-l-4 px-6 text-copy-secondary mb-6 py-2 border-blue-500">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Dragon 1 had a great career, and we are really proud of the contribution it made to science aboard the ISS, ”said Hans Koenigsmann, vice president of SpaceX.</font></font>
          </blockquote>
          <p class="text-copy-secondary mb-6">Детальная инструкция по компиляции RLDP—HTTP-прокси и его запуска для доступа к TON Sites, а также созданию непосредственно сайта в сети TON, <a href="https://test.ton.org/TonSites-HOWTO.txt">описана</a> на официальном сайте Telegram Open Network. Перевод инструкции на русском языке <a href="https://tginfo.me/ton-sites/">доступен</a> на сайте Telegram Info.</p>
          <p class="text-copy-secondary mb-6">Напомним, летом 2019 года TON Labs, будучи ведущим независимым разработчиком инфраструктуры для экосистемы TON, запустил платформу <a href="https://ton.dev/">TON Dev</a>, которая открывает первый набор инструментов с открытым исходным кодом, доступных для разработки, тестирования и выпуска продуктов для экосистемы TON. Эти инструменты позволяют легко и быстро интегрировать продукты на базе TON в сторонние приложения.</p>
          <figure class="border mb-5 p-5 rounded-md border-blue-400">
            <a class="kg-bookmark-container" href="https://kod.ru/test-ton-labs-dev-jul-2019/">
              <div class="kg-bookmark-content">
                <div class="text-copy-primary text-lg font-medium">Запущено закрытое тестирование инструментария на основе TON для разработчиков приложений</div>
                <div class="text-gray-600">В этом месяце запущено закрытое бета-тестирование инструментария на основе
                  Telegram Open Network (TON) для разработчиков приложений. Рассказываем подробнее
                  и говорим об этом с экс-директором особых направлений Telegram Антоном
                  Розенбергом. Амбициозная «песочница с бэкэнд-решениями» для TON открыта…
                </div>
                <div class="kg-bookmark-metadata">
                  <span class="text-blue-600">Владислав Войтенко</span>
                  <span class="text-blue-600">Код Дурова</span>
                </div>
              </div>
              <div class="h-12 w-12 hidden">
                <img class="h-full w-full" src="https://kod.ru/content/images/2019/07/SsylkiRETINA-41.png">
              </div>
              </a>
          </figure>
          <p class="text-copy-secondary mb-6">
            <em>Подписывайтесь на «Код Дурова» в <a href="https://tlgg.ru/">Telegram</a> и во <a href="https://vk.com/">«ВКонтакте»</a>, чтобы всегда быть в курсе интересных новостей!</em>
          </p>
        </section>
      </div>
    </article>
    <Comments />
  </div>
</template>

<script>
import Comments from '../components/Comments.vue';

export default {
  components: {
    Comments,
  },
};
</script>
