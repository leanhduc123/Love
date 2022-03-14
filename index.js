var love = setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 100;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;

  const imgList = [
    "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/50834233_1015351121982417_1451072430578597888_n.jpg?stp=c0.70.640.640a_dst-jpg_p640x640&_nc_cat=102&ccb=1-5&_nc_sid=da31f3&_nc_ohc=85Turq5N18YAX_BHl0z&_nc_ht=scontent-hkt1-1.xx&oh=00_AT_8Gb_69AmPpuvdvDj6IKnVup6rr_74MY1g2M-9G15_yQ&oe=62555111",
    "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/52715505_1024444554406407_7794878747567456256_n.jpg?stp=c0.70.640.640a_dst-jpg_p640x640&_nc_cat=108&ccb=1-5&_nc_sid=da31f3&_nc_ohc=vx3ypeILwwkAX8Y_I17&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-acqXtPc_f7muoEg0x1OOQAH8eQfkVmnevHwtUfQeDgg&oe=62544467",
    "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/87326596_1300292443488282_4316477037679214592_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=8JFjuj50VT8AX9pvGEX&_nc_ht=scontent-hkt1-1.xx&oh=00_AT8n7n_NZrchYX2NmONTuv964WclqERFBdARxtSInazoKQ&oe=62534966",
    "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/125940532_1528255820691942_7117304313798375144_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Z11GzNz32AYAX_f5GAh&_nc_ht=scontent.fhan2-2.fna&oh=00_AT__wFAeqtURbpIJVIJPMLOGi7hXGE4en2zpDW_FPjPfyQ&oe=625230FD",
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/274456751_1867757076741813_1711636335565840307_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BxgfLDF-e6YAX-Vn_mS&_nc_oc=AQlxhAoty7lGXlIj6Kemll93QgsJ7Q0UPFiR1m2kldirLSID8dioSD98PfuP5Rg0-tM&_nc_ht=scontent-hkt1-2.xx&oh=00_AT8l7zFhgZanU8vv8cZlIOXTqmnx6kLfQRUrZTn-rpNpRQ&oe=6232B584",
    "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/267627574_1815009308683257_5994654237777293230_n.jpg?stp=c0.106.640.640a_dst-jpg_p640x640&_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_ohc=n39r5ECJEMkAX_rgYyx&_nc_ht=scontent.fhan2-4.fna&oh=00_AT87s4WLXhhwDYT1oaxbwetTdUJUWUuF-9vWQ_eYdc1rxQ&oe=6233E8EE",
    "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/129914852_1544782479039276_4943155296713521740_n.jpg?stp=c0.73.640.640a_dst-jpg_p640x640&_nc_cat=107&ccb=1-5&_nc_sid=da31f3&_nc_ohc=aBzC8IoHz8AAX8kXi_V&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-rU0CQwP1krhZZ18wFc5FNW7Hmx3Gru8US3DBa108ENg&oe=62523F35",
  ];

  var index = Math.floor(Math.random() * imgList.length);

  const img =
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/274456751_1867757076741813_1711636335565840307_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BxgfLDF-e6YAX-Vn_mS&_nc_oc=AQlxhAoty7lGXlIj6Kemll93QgsJ7Q0UPFiR1m2kldirLSID8dioSD98PfuP5Rg0-tM&_nc_ht=scontent-hkt1-2.xx&oh=00_AT8l7zFhgZanU8vv8cZlIOXTqmnx6kLfQRUrZTn-rpNpRQ&oe=6232B584";

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      r_size +
      "px;height:" +
      r_size +
      "px;padding-left:" +
      (r_time + 10) +
      "px;padding-bottom:" +
      (r_time + 10) +
      "px;left:" +
      r_left +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      r_bg +
      ",1)" +
      ";animation:love " +
      r_time +
      "s ease'>" +
      "<img " +
      "style='width: " +
      (r_size - 15) +
      "px; height: " +
      (r_size - 15) +
      "px; border-radius: 100 % '" +
      " src='" +
      imgList[index] +
      "'/>" +
      "</div > "
  );

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      (r_size - 10) +
      "px;height:" +
      (r_size - 10) +
      "px;padding-left:" +
      (r_time + 5) +
      "px;padding-bottom:" +
      (r_time + 5) +
      "px;left:" +
      (r_left + r_num) +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      (r_bg + 25) +
      ",1)" +
      ";animation:love " +
      (r_time + 5) +
      "s ease'>" +
      "<img " +
      "style='width: " +
      (r_size - 25) +
      "px; height: " +
      (r_size - 25) +
      "px; border-radius: 100 % '" +
      " src='" +
      imgList[index] +
      "'/>" +
      "</div>"
  );
}, 500);
