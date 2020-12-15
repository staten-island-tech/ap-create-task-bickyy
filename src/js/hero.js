const heroList = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41%2BSdVy0ytL.jpg",
    name: "Black Panther",
  },
  {
    img:
      "https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2018/04/AIW_Online_1_Sheet_BlkWidow_v1_sm.jpg",
    name: "Black Widow",
  },
  {
    img:
      "https://i.etsystatic.com/15963200/r/il/66b2eb/1730781305/il_1588xN.1730781305_iihp.jpg",
    name: "Captain America",
  },
  {
    img:
      "https://i.pinimg.com/originals/83/1e/86/831e867af0b14642c2d035baafd8a781.jpg",
    name: "Collector",
  },
  {
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18698e00-244d-4a74-9598-fb07c7144eee/dbm926p-bd12a8c4-7e59-4c22-9e42-1c64d7bcc890.jpg/v1/fill/w_1024,h_1537,q_75,strp/poster__infinity_war___corvus_glaive___villains_by_4n4rkyx_dbm926p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTM3IiwicGF0aCI6IlwvZlwvMTg2OThlMDAtMjQ0ZC00YTc0LTk1OTgtZmIwN2M3MTQ0ZWVlXC9kYm05MjZwLWJkMTJhOGM0LTdlNTktNGMyMi05ZTQyLTFjNjRkN2JjYzg5MC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WuuxT55IVVWFopFYxs0p9mg8A6I8Ym4C06WvSu79ZwU",
    name: "Corvus Glaive",
  },
  {
    img:
      "https://cellularnews.com/wp-content/uploads/2020/06/96-avengers-infinity-war-character-poster-doctor-strange-325x485.jpg",
    name: "Doctor Strange",
  },
  {
    img:
      "https://vignette.wikia.nocookie.net/marveldcuniverse/images/f/f2/Drax_AIW_Profile.jpg/revision/latest/top-crop/width/360/height/450?cb=20180707000750",
    name: "Drax",
  },
  {
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18698e00-244d-4a74-9598-fb07c7144eee/dbm92bz-1a7fe029-5853-4778-9036-70f2da862a86.jpg/v1/fill/w_1024,h_1537,q_75,strp/poster__infinity_war___ebony_maw___villains_by_4n4rkyx_dbm92bz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTM3IiwicGF0aCI6IlwvZlwvMTg2OThlMDAtMjQ0ZC00YTc0LTk1OTgtZmIwN2M3MTQ0ZWVlXC9kYm05MmJ6LTFhN2ZlMDI5LTU4NTMtNDc3OC05MDM2LTcwZjJkYTg2MmE4Ni5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wvJnlZU9g6HeyYYSqj0_upemn0LFD6G26OY-PeQkQbM",
    name: "Ebony Maw",
  },
  {
    img: "https://i.ebayimg.com/images/g/7rkAAOSw90xaxc4Z/s-l400.jpg",
    name: "Falcon",
  },
  {
    img:
      "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Gamora-Infinity-War-Poster.jpg",
    name: "Gamora",
  },
  {
    img:
      "https://i.pinimg.com/originals/3b/f0/43/3bf043f9c2fa807532241ec71c1784cc.jpg",
    name: "Groot",
  },
  {
    img:
      "https://i.pinimg.com/originals/69/f7/94/69f794242874924a10f9e8d2fe62d3f9.jpg",
    name: "Heimdall",
  },
  {
    img:
      "https://imgc.allpostersimages.com/img/print/u-g-Q1BXG3N0.jpg?w=550&h=550&p=0",
    name: "Hulk",
  },
  {
    img:
      "https://www.herocollector.com/uploads/media/Avengers_Infinity_War_poster_Iron_Man.jpg",
    name: "Iron Man",
  },
  {
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/01d00181-cc7e-491c-b80e-ead14c4f6dc6/dcay2i0-a7d9529a-07e4-4382-a49c-dad2f33caa6c.jpg/v1/fill/w_600,h_888,q_75,strp/loki_infinity_war_poster_by_t_luminareth_dcay2i0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04ODgiLCJwYXRoIjoiXC9mXC8wMWQwMDE4MS1jYzdlLTQ5MWMtYjgwZS1lYWQxNGM0ZjZkYzZcL2RjYXkyaTAtYTdkOTUyOWEtMDdlNC00MzgyLWE0OWMtZGFkMmYzM2NhYTZjLmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YFRL_HsZ-G-3SfFPgTirND5adVO9y89bizmN2uABK6I",
    name: "Loki",
  },
  {
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7229d393-c3b8-4703-a41e-e876546d2612/dc7wdj6-3fbd6471-ebe9-4186-a4c0-ff6100a038bd.jpg/v1/fill/w_1024,h_1517,q_75,strp/avengers__infinity_war_mantis_poster_by_artlover67_dc7wdj6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTE3IiwicGF0aCI6IlwvZlwvNzIyOWQzOTMtYzNiOC00NzAzLWE0MWUtZTg3NjU0NmQyNjEyXC9kYzd3ZGo2LTNmYmQ2NDcxLWViZTktNDE4Ni1hNGMwLWZmNjEwMGEwMzhiZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EQ5-qClCpaLuGPsIZ1YPnfdMj3o_3ITpUoM1UyVMZbw",
    name: "Mantis",
  },
  {
    img:
      "https://bleedingcool.com/wp-content/uploads/2018/04/avengers-nebula.jpg",
    name: "Nebula",
  },
  {
    img:
      "https://i.pinimg.com/originals/10/ab/96/10ab96f41a06503bcce89c089c350268.jpg",
    name: "Okoye",
  },
  {
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18698e00-244d-4a74-9598-fb07c7144eee/dbm921j-daaa9efa-434e-471f-8e3f-526801c9e386.jpg/v1/fill/w_1024,h_1537,q_75,strp/poster__infinity_war___proxima_midnight___villains_by_4n4rkyx_dbm921j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTM3IiwicGF0aCI6IlwvZlwvMTg2OThlMDAtMjQ0ZC00YTc0LTk1OTgtZmIwN2M3MTQ0ZWVlXC9kYm05MjFqLWRhYWE5ZWZhLTQzNGUtNDcxZi04ZTNmLTUyNjgwMWM5ZTM4Ni5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.aMBKf3mIeBmtn373apBRHwSyY1Ysu-LA97SkVg18CO0",
    name: "Proxima Midnight",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41GB-fHO6cL._AC_.jpg",
    name: "Rocket",
  },
  {
    img:
      "https://images.hdqwalls.com/download/wanda-maximoff-in-avengers-infinity-war-8k-poster-87-480x854.jpg",
    name: "Wanda Maximoff",
  },
  {
    img:
      "https://i.pinimg.com/originals/fb/47/50/fb4750f1724871bd947f8ad6d02174b0.jpg",
    name: "Shuri",
  },
  {
    img:
      "https://i.pinimg.com/564x/e6/12/39/e612391ab8447476c0e723f46c99bd73.jpg",
    name: "Spider-Man",
  },
  {
    img:
      "https://media.comicbook.com/2018/04/avengers-infinity-war-character-posters-star-lord-1099256.jpeg",
    name: "Star-Lord",
  },
  {
    img:
      "https://i.pinimg.com/736x/30/20/27/302027ea811397c1aacce805e1fda4cb.jpg",
    name: "Thanos",
  },
  {
    img:
      "https://d9nvuahg4xykp.cloudfront.net/-3707385309016252472/7301595684107671378.jpg",
    name: "Thor",
  },
  {
    img:
      "https://i.pinimg.com/736x/ad/67/ad/ad67ad25cad27a9d79f95b35c299db25.jpg",
    name: "Vision",
  },
  {
    img:
      "https://cellularnews.com/wp-content/uploads/2020/06/91-avengers-infinity-war-character-poster-war-machine-325x485.jpg",
    name: "War Machine",
  },
  {
    img:
      "https://vignette.wikia.nocookie.net/marveldcuniverse/images/4/41/Winter_Soldier_AIW_Profile.jpg/revision/latest/scale-to-width-down/620?cb=20180706220755",
    name: "Winter Soldier",
  },
  {
    img:
      "https://thefutureoftheforce.com/wp-content/uploads/2018/04/img_8550.jpg",
    name: "Wong",
  },
];
export { heroList };
