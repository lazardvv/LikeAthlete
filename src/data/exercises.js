const exercises = [
  {
    id: 1,
    athlete: 'Unknown',
    title: 'Triple jump from 2 feet',
    athletesSports: 'Unknown',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e6038f00069f151c00/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64ced0035b3977a5a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e506de0004a9c4a48e/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 2,
    athlete: 'Unknown',
    title: 'Semi single RDL',
    athletesSports: 'Unknown',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e6037a0012179e7870/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64ce40008d26b8dd7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e507150012a95ec7ca/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 3,
    athlete: 'Tyreek Hill',
    title: 'Nordic Hamstring Curl',
    athletesSports: 'NFL',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4cf060007d316c8f6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64ce80016da6dd532/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e5072b00080fb5e98a/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 4,
    athlete: 'Isaiah Rivera',
    title: 'Nordic Hamstring Curl',
    athletesSports: 'Dunking',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4d97b0037104f1ab9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64cca003afdcd1b04/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e50739002894fdcad8/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 5,
    athlete: 'Isaiah Rivera',
    title: 'RDL',
    athletesSports: 'Dunking',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4d856000e914f56d1/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64ccf002970b38fe1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e5074b00215bc482d5/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 6,
    athlete: 'Isaiah Rivera',
    title: 'Hamstring Curl on Machine',
    athletesSports: 'Dunking',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4d850000f9816fcd3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64cc5000d3f085ff0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e5075f00233a9b68e5/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 7,
    athlete: 'Will Claye',
    title: 'Split jumps',
    athletesSports: 'Triple Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e6054f0005a1037ad6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64cfe0032d37e3ab7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e507730034afed95e2/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 8,
    athlete: 'Will Claye',
    title: 'Banded single leg bounds',
    athletesSports: 'Triple Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e605fe002c5141d44c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64cf8002f793eea94/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e511e900072f56b3ee/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 9,
    athlete: 'Mike James',
    title: 'Hip Opening Exercise',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4f1ef0027425c4c7f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64ce00007935f1d47/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e5078b001874224907/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 10,
    athlete: 'Lebron James',
    title: 'Deadlift',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4f09800293e54a0f6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64cd9001954d02946/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e50797000c4249d19a/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 11,
    athlete: 'Unknown',
    title: 'Lateral Jump+Hop',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4f1e3001a7e5a61bb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: '',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e50cff00199bd110e3/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 12,
    athlete: 'Unknown',
    title: 'Hip Mobility',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4f1eb001ecdf07ab7/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64ca9003b182d7666/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e50d06000a96a7bcbc/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 13,
    athlete: 'GBG Hoops Founder',
    title: 'Landmine Lunge Shoulder Press',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4f7df002429351f6f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64cf1003283443b22/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e50d0d0009904b63d0/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 14,
    athlete: 'Fred VanVleet',
    title: 'Hip Mobility and Core',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4f7db00258fcdb493/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64c9e00065e2d98c0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e50d13001df9dec2f6/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 15,
    athlete: 'NBA player',
    title: 'Pistol Squats',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4f7d6001bc7a75aad/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64cb6003c94d9bead/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e50d1a00100bd5420e/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 16,
    athlete: 'Fred VanVleet',
    title: 'Lunge Variation',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4f7d0001369b8efd4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64cd3002d7a875ff9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e50d21001ac7a62adb/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 17,
    athlete: 'GBG Hoops Founder',
    title: 'Hip Mobility and Core',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e4f7c7002db556d2fb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e64cbb003178460771/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e50d27001152affe92/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 18,
    athlete: 'Alex Pereira',
    title: 'Drop+vertical+broad jump',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75d60000bbb9e4123/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769ed0025ea40eddd/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e76d2e000e10034227/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 19,
    athlete: 'Alex Pereira',
    title: 'RDL+jump',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75d36001f340c4508/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769e9002a46590501/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e76d7c0011cc3218c5/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 20,
    athlete: 'Alex Pereira',
    title: 'Single leg jumps',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75d0e000546db2925/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769e5001a6efca2f2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e76dd6003bfd0e20f7/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 21,
    athlete: 'Femke Bol',
    title: 'Hurdle Jumps',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75ce8002bd35066dd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769d40020d4dae203/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e76ea30031560dea67/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 22,
    athlete: 'Femke Bol',
    title: 'Hang Clean from Boxes',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75ca7001f955fb5d6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769d8001a0a3feb0f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e76eef000ed55bb99e/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 23,
    athlete: 'Dmitry Bivol',
    title: 'Spiderman Plank',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75ca20013eb4fe77e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769b0001aadb22426/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e76f990001e85dcd60/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 24,
    athlete: 'Dmitry Bivol',
    title: 'Plank with Kettlebell Slide',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75c9400035678772e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769e1001a8e990e7d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e770a400357cd7f019/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 25,
    athlete: 'Artur Beterbiev',
    title: 'Dumbell Power Complex ',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75c9c003bf9042714/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e77243003cb763dc51/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e7711e00064d69d020/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 26,
    athlete: 'Fred VanVleet',
    title: 'Single Leg Squat Slide',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75c6b000bfc8d54b1/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769dc00311c6af11c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e77298003a99186851/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 27,
    athlete: 'GBG Hoops Founder',
    title: 'Toe and Quads Iso',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75c630039ed4ca6f9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769b40022265749a0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e7734f003d86173ed8/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 28,
    athlete: 'Jalen Green',
    title: 'Kettlebell front squat',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75c87001b2b14893a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769c80011529ca15f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e7739500159ae6434d/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 29,
    athlete: 'Jalen Green',
    title: 'Single leg takeoff isometric on machine',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75c8300037a3185c0/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769ba0038c861b89e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e774300022ab89531f/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 30,
    athlete: 'Jalen Green',
    title: 'Quarter shrimp squat and knee drive',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75c7d0039fe291a8f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769cf002c81fa6b10/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e7743c00356e67d5a9/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 31,
    athlete: 'Jalen Green',
    title: 'Landmine RDL with knee drive',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75c78000bb90f5b3b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769c00023cc4dcee4/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e7743f003423caa0cb/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 32,
    athlete: 'Jalen Green',
    title: 'Single leq squat to lateral leg reach',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e75c720011deb41e66/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e769c4002eb2dd92d3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e774430033562aae54/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 33,
    athlete: 'Mike James',
    title: 'Explosive RDL simulation',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e8fe5f00350d34329c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e8fe7000087c697868/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e8fe6b000385f00c15/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 34,
    athlete: 'Mike James',
    title: 'Kettlebell Reaches ',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e900710018ac27b655/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e90084001b93e33842/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e8fefb002827dc6d95/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 35,
    athlete: 'Mike James',
    title: 'Overcoming Iso',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e90173000751a9a9f0/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e9016900313002b7d3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e901e3000b4075db26/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 36,
    athlete: 'Mike James',
    title: 'Landmine Single Leg RDL to Knee Drive',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e90284001e86500e35/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e90291000379c17b39/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e9028c003aa8fea776/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 37,
    athlete: 'Mike James',
    title: 'Landmine Single Leg RDL to Knee Drive with Rotation',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e903be0017586e6081/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e903c5002781808294/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e903c1003c9e0e1b99/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 38,
    athlete: 'Mike James',
    title: 'Shoulder Circles',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e90338000f7a83d27a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e90338000f7a83d27a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e9033c000aa997ca22/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 39,
    athlete: 'Mike James',
    title: 'Hign Knees March With Kettlebell',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e90346002253b648a1/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e9034c0029722fa5ec/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e9034900300451b3a0/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 40,
    athlete: 'Mike James',
    title: 'Landmine Rotation',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906e1003dc7b144fa/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906e900156fad08f4/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906e4003ceb2d4006/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 41,
    athlete: 'Mike James',
    title: 'Hign Knees March With Kettlebell',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906d50000891cbe48/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906dd0008ad0c4133/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906d800364c87e435/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 42,
    athlete: 'Mike James',
    title: 'Explosive plate single leg RDL to Knee Drive',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906c1000246f3db0c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906c800274db856e2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906c50015fc76a83c/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 43,
    athlete: 'Mike James',
    title: 'Lunge Incline Shoulder Press',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906aa00058dd4d5bd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906b10017612bdd1f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906ad000f45bd5aaf/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 44,
    athlete: 'Mike James',
    title: 'Seated Shoulder Press',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e9069b00348990bbf4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906a500020b001573/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68e906a0003c0ad25f12/view?project=68595ef3002478ec3cd8&mode=admin',
  },
  {
    id: 53,
    athlete: 'Dwyane Wade',
    title: 'Depth Jump',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecba959b4897e6cfd1/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecba991df0839d9911/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecba9ace5be78379ab/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 54,
    athlete: 'Femke Bol',
    title: 'Hang Snatch',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbe4e00027a3d3666/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbe4e00027a3d3666/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbe68000c0551d1a2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 55,
    athlete: 'Khamzat Chimaev',
    title: 'Band Push',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaa4bc3195f7adab/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaa6de5c3dbe5564/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaa8b26e02910863/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 56,
    athlete: 'Khamzat Chimaev',
    title: 'Deadlift',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaad7842127b49b4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaaf8fbb083521a1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbab15723a630653d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 57,
    athlete: 'Khamzat Chimaev',
    title: 'Hang Clean to Shoulder PRess',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbab809da553dfa7d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaba6cc4e84382a3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbabc22df16a519fd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 58,
    athlete: 'Khamzat Chimaev',
    title: 'Hurdle Jumps',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbac320e3d58d4654/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbac59b27e7aee6bf/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbac7789634ee3431/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 59,
    athlete: 'Khamzat Chimaev',
    title: 'Landmine Rotation with explosive push',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbad0766875b72831/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbad364d469dc32e5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbad5135b45ea92b9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 60,
    athlete: 'Lebron James',
    title: 'Wide Half Squat',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbadbd5ce90ec4654/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbade73fa220aeb55/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbae02f967a20e1d0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 61,
    athlete: 'Lieke Klaver',
    title: 'Box Paused Squat ',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbae6cec60beb8f77/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbae9107253b72879/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaeacc219443148d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 62,
    athlete: 'Lieke Klaver',
    title: 'Hang Clean',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaf289d64dbd986a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaf540b2bf9981f8/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbaf72aab4f1b9c6b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 63,
    athlete: 'Lieke Klaver',
    title: 'Hanging Leg raises',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbb06ef3bfbbdc7fe/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbb0ba393ea7f6c9a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbb0d996883b031b9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 64,
    athlete: 'Lieke Klaver',
    title: 'Trap  Bar Deadlift',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbb1944437d342b67/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbb1c8bf893d39383/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbb1e86d529908eed/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 65,
    athlete: 'Noah Lyles',
    title: 'Power Clean',
    athletesSports: '100m,200m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbe22002962a69daa/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbf3c0031827661b7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbf61003833d5210d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 66,
    athlete: 'Spencer Dinwiddie',
    title: 'Smith Machine Eccentric single leg box squat',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbb3197e203b30670/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbb3443ee4345c2ca/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ecbb361d28a83f8975/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 72,
    athlete: 'Asafa Powell',
    title: 'High Knees',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2c1f2200f5144879/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2c27b15b7af83b7b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2c29e641e3392059/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 74,
    athlete: 'Asafa Powell',
    title: 'Hurdle Step Over',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2c750dfd34adb591/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2c7d250564ac5428/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2c7f03c4286df994/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 75,
    athlete: 'Asafa Powell',
    title: 'Leg Press',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2cd4858800034f46/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2cd67b3196589ffe/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 79,
    athlete: 'Asafa Powell',
    title: 'Repetitive Hang Cleans',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2d54c3b8df6bca5a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2d56a08765e24aef/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 80,
    athlete: 'Asafa Powell',
    title: 'Resisted Sprinting',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2d73f370a85f9d4d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2d79c30dff3f7d9b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2d7b7aa09b008aa2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 81,
    athlete: 'Asafa Powell',
    title: 'Sprinting',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2d8de45a7ae1f123/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2d92b9d3b837eb8e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed2d95971b365a2193/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  
  {
    id: 101,
    athlete: 'Femke Bol',
    title: 'Power Clean from Box',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed33c35dd4a5cd077d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed33c7156ba7ff4da8/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed33c87368f43865e5/view?project=68595ef3002478ec3cd8&mode=admin'
  },

  {
    id: 103,
    athlete: 'Femke Bol',
    title: 'Repetitive Hang Snatches',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed33f6ec924992db56/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed33fa2be0bddd3779/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed33fb88439a255468/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 106,
    athlete: 'Femke Bol',
    title: 'Single Leg Hip Thrusts',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed341d24b8f4e396cd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed3420b7c6fb875e13/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed342215fa9bcedcb5/view?project=68595ef3002478ec3cd8&mode=admin'
  },

  {
    id: 1082,
    athlete: 'Femke Bol',
    title: 'Single Leg RDL',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed34391edeb0dc59a0/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed343c979b61c9cc2e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed343dee7671cabb38/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 109,
    athlete: 'Femke Bol',
    title: 'Split Squat to Knee Drive on Box',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed344b4964910f9310/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed344f26cb7db31199/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed3450957efea92fea/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 110,
    athlete: 'Femke Bol',
    title: 'Split Squat',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed345d118706d11997/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed34610078e037b914/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed34625ba16ae6176f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 111,
    athlete: 'Femke Bol',
    title: 'Step up jumps',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed346e05a7302d585e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed3471674cbbc5c015/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed3472da105ce901f4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 112,
    athlete: 'Femke Bol',
    title: 'Step up',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed347f9a8ee5ddd111/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed348371b27704f3e9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed3484c99649e6b7d3/view?project=68595ef3002478ec3cd8&mode=admin'
  },

  {
    id: 114,
    athlete: 'Lieke Klaver',
    title: 'Hip Thrust',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed3496c84cf704d928/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed34993e2de71039d0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed349a95689afd45b0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 115,
    athlete: 'Lieke Klaver',
    title: 'Repetitive Power Clean',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed34accd98250e04ae/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed34b283aa5f61c929/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ed34b403d66fece4da/view?project=68595ef3002478ec3cd8&mode=admin'
  },

  {
    id: 117,
    athlete: 'Femke Bol',
    title: 'Bycycle  Driving',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ede9ea801133e39ff3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ede9f15a1c67e08889/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ede9f335e1df6d11a8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 121,
    athlete: 'Femke Bol',
    title: 'Front Squats',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68edea42600c480594fc/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68edea44c5aa7eaad5aa/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68edea46863b935b5222/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 123,
    athlete: 'Asafa Powell',
    title: '4 repetitive broad jumps',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd2c8965f31c1bb1/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd341816ee9e1ca3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd35f0a8e3e666b8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 124,
    athlete: 'Asafa Powell',
    title: 'Block Start Sprint',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd4141fa4bfb9a91/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd46cc2987c4ce12/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd48b93f34110138/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 125,
    athlete: 'Asafa Powell',
    title: 'Block Start Sprinting',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd529dd5536a649c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd5869daa0647e85/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd5a7b755b8393e2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 126,
    athlete: 'Asafa Powell',
    title: 'Box Jumps',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd751718701fe0c4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd7d081bc2b8a147/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd7ee1a0438a5c5f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 127,
    athlete: 'Asafa Powell',
    title: 'Front Squat',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd87793267a14d02/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd8b58d1a4f3b84b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd8d2bec81f109af/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 128,
    athlete: 'Asafa Powell',
    title: 'Hurdle Jumps',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd978de610575f06/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd9ce9e848507db3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebd9ec734624d35b5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 129,
    athlete: 'Asafa Powell',
    title: 'Medicine Ball V Up',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebdb5a770449b0d4a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebdbe0b6debd67e30/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebdc0161a44d80cce/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 130,
    athlete: 'Asafa Powell',
    title: 'Power Clean to front squat catch',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebdd6362bc2bf461f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebddc81cc81158239/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebdde71f9e1b2a048/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 131,
    athlete: 'Asafa Powell',
    title: 'Power clean with front squat catch',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebde6a181229ac3b8/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebdea97195d473830/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebded39717726847e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 132,
    athlete: 'Asafa Powell',
    title: 'Yoga Ball V Up Hands to Legs Catch',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebe03270a5f00bd42/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebe09d7b9008a3316/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebe0ca37cba3a7547/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 133,
    athlete: 'Femke Bol',
    title: '3 step to jump simulation',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebe75e2d735e9d241/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebe79d0162060c571/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebe7bdbd596a8ab25/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 134,
    athlete: 'Femke Bol',
    title: '3 steps to jump simulation',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebea4e5d9d3febe5f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebeb2cf223eb5e146/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebeb4b10a78610b50/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 135,
    athlete: 'Femke Bol',
    title: 'Assisted Pull ups',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebecc1b1a55163eca/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebedc38f07be88cc1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebedf96f0225933eb/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 136,
    athlete: 'Femke Bol',
    title: 'Banded Hip Circles',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebee68e6a9acd10bc/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebeec976c33614b9f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebeef2eb721c785df/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 137,
    athlete: 'Femke Bol',
    title: 'Banded Leg Pushofs',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebef79aea157fae7b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf0082069d78ccbb/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf026046805f4d5b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 138,
    athlete: 'Femke Bol',
    title: 'Bounding to Long Jumps',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf0b2d975615ed70/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf12685f014cc64a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf1457d26f3c29ca/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 139,
    athlete: 'Femke Bol',
    title: 'Dumbell Kettlebel Drive',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf1da7f14a12c739/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf2205ac6d91006b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf2397beed55098d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 140,
    athlete: 'Femke Bol',
    title: 'Forward Curtsy Lunge simulation',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf2f3150c3429b02/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf33a60ba598f923/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf35a0e77f136834/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 141,
    athlete: 'Femke Bol',
    title: 'Front Squat',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf50ec2f038db852/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf5a6ea8f1973862/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf5c1df5bdcfde7f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 142,
    athlete: 'Femke Bol',
    title: 'Hang Clean',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf70517c23cbeb30/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf7957984dcb8d04/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf7b1607c138c0e6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 143,
    athlete: 'Femke Bol',
    title: 'Hang Cleans',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf84bf92a242164b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf8915fb6562a015/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf8aa1fa9dbaef72/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 144,
    athlete: 'Femke Bol',
    title: 'Hurdle Jumps',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf8e9878e17db219/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf91a1c32d998e49/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf9336a74b2d9b86/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 145,
    athlete: 'Femke Bol',
    title: 'Kneeling Snatch with Knee Drive Simulation',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf96893f7fedceeb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf9869d904f4e57e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebf9b04cb4b252fd7/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 146,
    athlete: 'Femke Bol',
    title: 'Power clean',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfa7c5acf99b1ad3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfaf2cc8c5c1953f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfb0b9978d0359dd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 147,
    athlete: 'Femke Bol',
    title: 'Power cleaning',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfbca9f899353f89/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfc1932567ee32d1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfc38a3664182d14/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 148,
    athlete: 'Femke Bol',
    title: 'Power Cleans',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfccdbc3ee0540a4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfd15e36a9d5320e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfd5a081237cf0e5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 149,
    athlete: 'Femke Bol',
    title: 'Single leg Box Step up jump',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfd8cc4e7c92676e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfdcd639e00608af/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfd5a081237cf0e5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 150,
    athlete: 'Femke Bol',
    title: 'Single leg glute bridge variation',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfe06c1545ba99ff/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfe2a806cdab5ee9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfe439b5839d44b4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 151,
    athlete: 'Femke Bol',
    title: 'Single Leg jump variation',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfec621e90ded9b9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebfefc52afc0d681e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebff1d2c5f61464e9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 152,
    athlete: 'Femke Bol',
    title: 'Yoga Ball Horizontal Knee Drive',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebff6cbfb2a028cd0/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebff995e386774dbf/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68eebffb87fe7f1cd0fb/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 153,
    athlete: 'Khadi Sagnia',
    title: ' Step up',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09818e8b51480d27d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09824310fed282504/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09825817578327d22/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 154,
    athlete: 'Khadi Sagnia',
    title: 'Alternating Forward Banded Lunge Scissor',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0982ab87e5e84db56/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0982ccd612fd64acc/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0982e7fd7b670f06e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 155,
    athlete: 'Khadi Sagnia',
    title: 'Back exercise',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098395bfa445caad9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0983d2dd62f0a7716/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0983f62eeb3a3612a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 156,
    athlete: 'Khadi Sagnia',
    title: 'Back squat',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0984ad885a8148a19/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0984de7179264540d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0985169f7033b2158/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 157,
    athlete: 'Khadi Sagnia',
    title: 'Back squats',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0985615ed3003628a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09858603ab8f948ca/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09859ec37f13c9a3f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 158,
    athlete: 'Khadi Sagnia',
    title: 'Backward hill hops',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09866545c7be5f81a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0986acd440b530630/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0986c7df13a661daf/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 159,
    athlete: 'Khadi Sagnia',
    title: 'Banded Lunge Scissor',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098738de9280b79f5/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098762eb2d805f052/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09877d081452eaab0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 160,
    athlete: 'Khadi Sagnia',
    title: 'Bar leg raises',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09889d03363b2038f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0988f408b89866e33/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0989111a84cd04d03/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 161,
    athlete: 'Khadi Sagnia',
    title: 'Belt squats',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098a52da022b97232/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098ac86a28c33f515/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098ae8105e6ce46e6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 162,
    athlete: 'Khadi Sagnia',
    title: 'Bench good mornings',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098d618c4bf675344/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098e0519a48a7686a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098e25346c51a55e5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 163,
    athlete: 'Khadi Sagnia',
    title: 'Bench press',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f098f9abc97f45bf5d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0990148c9924ef24f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099034cb041a4d2fd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 164,
    athlete: 'Khadi Sagnia',
    title: 'Bicycle cruches',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0990d89a78ad72871/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09911e049751a6717/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0991387938f721dc4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 165,
    athlete: 'Khadi Sagnia',
    title: 'Bicycle driving',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0991bbf4f642f69aa/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0991f96bd6868e343/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0992152b82e7e53bc/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 166,
    athlete: 'Khadi Sagnia',
    title: 'Bodyweight half squat',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099267f9bf4830cfc/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09928dd7479651692/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0992a7d3cd50a502c/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 167,
    athlete: 'Khadi Sagnia',
    title: 'Bodyweight squat and curtsy lunge',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0992e97d97f873937/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099310d1fb922ce6f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099328fd4ab124dad/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 168,
    athlete: 'Khadi Sagnia',
    title: 'Box jumps with plate',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0993ddd4c7216532b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099423c009e28f95a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09943e6979c148818/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 169,
    athlete: 'Khadi Sagnia',
    title: 'Box jumps',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0994a8cafe3607879/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0994cd49dfd87007e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0994e59c5ed5110d6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 170,
    athlete: 'Khadi Sagnia',
    title: 'Broad jump',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099582948d572625c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0995bb92d50cca8fa/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0995d60285861a37d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 171,
    athlete: 'Khadi Sagnia',
    title: 'Broad jumps',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099698a2b0d85b965/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0996e569b1ca1dfd2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0997010a243532522/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 172,
    athlete: 'Khadi Sagnia',
    title: 'Bulgarian split squat',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099812c6a8000c1bc/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09986c03339c9efcb/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099887eea443f0511/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 173,
    athlete: 'Khadi Sagnia',
    title: 'Burpees',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09990579755a8dd6c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099949aa3a68997c9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f0999629c6d24f4d8a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 174,
    athlete: 'Khadi Sagnia',
    title: 'Calf raises Eccentric focus',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099ad70dc8e310b6b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099b4623c7e0b2f38/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099b64273ad373d4d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 175,
    athlete: 'Khadi Sagnia',
    title: 'Consecutive Hang Cleans',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099be92b6d0fc05b0/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099c20012f00788a1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099c394e4b6f086fa/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 176,
    athlete: 'Khadi Sagnia',
    title: 'Dead Bug Exercise',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099ce5d1068b2e6cd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099d47ef9822a1b46/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099d64d04ae303e17/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 177,
    athlete: 'Khadi Sagnia',
    title: 'Decline push ups',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099db97b52e65dd75/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099de50cf9b37d378/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f099e047050052a980/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 178,
    athlete: 'Khadi Sagnia',
    title: 'Elevated feet split squat',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a0588c12cb8810d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a0f9ec56fbc2b79/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a119105d33a28ec/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 179,
    athlete: 'Khadi Sagnia',
    title: 'Elevated split squat',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a22b62ee6b99077/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a2828a8480356c9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a2a108776e0b8f6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 180,
    athlete: 'Khadi Sagnia',
    title: 'Exercise for back',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a359ebe0686bf7c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a3abe086c7cbe34/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a3c6752d2cf1165/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 181,
    athlete: 'Khadi Sagnia',
    title: 'Fire hydrants and donkey kicks and ',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a49bd233d0e3bb4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a4e906c72755bf7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a5061933b211b45/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 182,
    athlete: 'Khadi Sagnia',
    title: 'Fire Hydrants',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a558376a07dc873/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a5843e4f42277c5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a59d646e5a7bd82/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 183,
    athlete: 'Khadi Sagnia',
    title: 'Forward hill hops',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a63801d29879f4b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a67244ebeaf2c32/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a6912e8785ac31c/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 184,
    athlete: 'Khadi Sagnia',
    title: 'Forward stairs jumps',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a7f262e12490a18/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a8747050f6160de/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a892af36e194a97/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 185,
    athlete: 'Khadi Sagnia',
    title: 'Glute exercise',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a8f81c9c4dc633f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a926c1632a4ea7f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a94189b30812887/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 186,
    athlete: 'Khadi Sagnia',
    title: 'Good  Morning ',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a9b08d6ffe311b8/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a9e389d27f1902e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09a9fde9605b7b83f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 187,
    athlete: 'Khadi Sagnia',
    title: 'Good morning',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ab7f153d6ef93c4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ac01d1621a254b5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ac1f188922f1b5f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 188,
    athlete: 'Khadi Sagnia',
    title: 'Good Mornings',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ac97325cc8c4545/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09acce28dd774c75d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ace7ff7a3557c9c/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 189,
    athlete: 'Khadi Sagnia',
    title: 'Hang clean ',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ad877df5b8ae0ed/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09addc51a442e5f11/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09adf79cc114e66a0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 190,
    athlete: 'Khadi Sagnia',
    title: 'Hang Cleaning',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ae3f0488f992f0f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ae6a47f730c85f0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ae83a7cc886538f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 191,
    athlete: 'Khadi Sagnia',
    title: 'Hang Cleans',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09aef0f58ab9d53de/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09af2772ec41ae5a8/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09af3f1df225b3429/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 192,
    athlete: 'Khadi Sagnia',
    title: 'Hanging crunches',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b0d5571e7d3ebd2/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b17e86de3824c43/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b19d959b45c211f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 193,
    athlete: 'Khadi Sagnia',
    title: 'Hops over line',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b1cf0c57ffa40e4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b1eb9981d72bfa3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b20490a63536d96/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 194,
    athlete: 'Khadi Sagnia',
    title: 'Knee Side plank leg raises',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b28ebae481e54f3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b2e2469e3b7d789/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b2fe33b6e018425/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 195,
    athlete: 'Khadi Sagnia',
    title: 'Kopenhangen plank with knee drive to side',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b3ca40a8ac41fec/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b40c1a1128b1071/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b42522253791f69/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 196,
    athlete: 'Khadi Sagnia',
    title: 'Long jump',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b604f9cc58cc31d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b6cbbd8fd043351/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b70d95b77a67f75/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 197,
    athlete: 'Khadi Sagnia',
    title: 'Long jumping',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b79375c5c5a5b16/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b81a7f66f73fdca/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b835edd30746921/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 198,
    athlete: 'Khadi Sagnia',
    title: 'Max broad jump',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b8b295f24f2daea/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b8e3e676dc9ac17/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b8fe2483b148a86/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 199,
    athlete: 'Khadi Sagnia',
    title: 'Max effort broad jump',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b95a3a11b82bf1e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b9809abfd2f1580/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09b999a397a7e8f5e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 200,
    athlete: 'Khadi Sagnia',
    title: 'Max Hang Clean',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ba039d215a2acd9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ba37d1c5551054a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ba514894fb4a3f9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 201,
    athlete: 'Khadi Sagnia',
    title: 'Mountain climbers',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09baca3e1fb59e3bc/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bb036d2b975212b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bb24676e447cd45/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 202,
    athlete: 'Khadi Sagnia',
    title: 'Nordic hamstring curl semi assisted',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bbe46fd2c44f204/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bc2bcc653735f2d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bc4aa2ea8807a69/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 203,
    athlete: 'Khadi Sagnia',
    title: 'Nordic Hamstring curls assisted with yoga ball',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bca62826ba39f42/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bcd396db9a453c3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bced3efa0d60623/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 204,
    athlete: 'Khadi Sagnia',
    title: 'Overhead squat',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09be0cf6e7e3f3e20/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09be7c59ab4b45312/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09be967720ee2e431/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 205,
    athlete: 'Khadi Sagnia',
    title: 'Overturning Back to V Up Medicine Ball exercise',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bf9ade3e133d821/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09bfec53683759353/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c0070b679922039/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 206,
    athlete: 'Khadi Sagnia',
    title: 'Pike push ups',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c06705017242174/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c093a6d4a412958/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c0aac4a1eb7be46/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 207,
    athlete: 'Khadi Sagnia',
    title: 'Plank jacks over bench',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c0f215ddc076c97/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c109a0a891ca17c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c120f5a20a35aad/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 208,
    athlete: 'Khadi Sagnia',
    title: 'Plank jacks',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c19f17cca41975c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c1dc9aa74f0ab3e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c1f7424b429225e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 209,
    athlete: 'Khadi Sagnia',
    title: 'Plank to push up',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c2e7c147936f9a5/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c36466031e18599/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c3832f9a90b1b3f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 210,
    athlete: 'Khadi Sagnia',
    title: 'Plank with knee drive to the side',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c4290e77db3f5ae/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c467b729db5cfd8/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c4814cf0e09a1a0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 211,
    athlete: 'Khadi Sagnia',
    title: 'Pull up bar leg raises.mp4',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c51de066860fe25/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c55440d0e6a678f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c56d94d5bde90fa/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 212,
    athlete: 'Khadi Sagnia',
    title: 'Pull ups',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c5b4bfd503be1f3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c5de23283e33257/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c5f800030dc803d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 213,
    athlete: 'Khadi Sagnia',
    title: 'Pull ups.mp4',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c69445ae0aab289/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c6ccc8763965bd1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c6e5bcfb1f49fe9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 214,
    athlete: 'Khadi Sagnia',
    title: 'Push ups with hands forward',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c7fa0f061501aa6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c8460532637141f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c86223efaf09355/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 215,
    athlete: 'Khadi Sagnia',
    title: 'Push ups',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c8fe16ed5bd6c5a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c939bd91e51c92d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c9558b93703e13d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 216,
    athlete: 'Khadi Sagnia',
    title: 'Quarter squats',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c9a4255aebe863e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c9cac774fe774c3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09c9e616ba05e60d2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 217,
    athlete: 'Khadi Sagnia',
    title: 'Quick Battle Rope up and down',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09cc068d3b2aca171/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ccc77dd9427b1e4/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09cce7201d5ab9ba3/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 218,
    athlete: 'Khadi Sagnia',
    title: 'Quick feet over line',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09cd0aacd252e9fcd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09cd251e6db32fd6b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09cce7201d5ab9ba3/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 219,
    athlete: 'Khadi Sagnia',
    title: 'Quick Feets',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ce47d15f0448df2/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ceb0ee2889213c0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ceccc8729a64c12/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 220,
    athlete: 'Khadi Sagnia',
    title: 'Quick hamstring band pulls',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d147680e1276bf2/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d1d34868172ee74/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d1f2449c8e485e7/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 221,
    athlete: 'Khadi Sagnia',
    title: 'Repetetive hang cleans',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d28944be637d84e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d2c3c50283cf933/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d2dce4de1364a2b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 222,
    athlete: 'Khadi Sagnia',
    title: 'Ressisted sprinting',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d35b724421852e9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d38d3b51633dad1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d3a7804b7d78fe6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 223,
    athlete: 'Khadi Sagnia',
    title: 'Reverse Crunches',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d44847f40408fe8/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d477faafe78f097/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d49141d174be6bd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 224,
    athlete: 'Khadi Sagnia',
    title: 'Running to bex step up with knee drive',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d546735f12b5f12/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d58a607c1deec4e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d5a4df31b458deb/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 225,
    athlete: 'Khadi Sagnia',
    title: 'Scissor Lunge Jumps',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d5f3bebac9eef69/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d620a53cb148133/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d64037662119df8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 226,
    athlete: 'Khadi Sagnia',
    title: 'Shoulder cirsles with plate',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d6b37028309762a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d6e41bff90aaae7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d6fc5e184f70e9c/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 227,
    athlete: 'Khadi Sagnia',
    title: 'Side crunches',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d7b36370fedef89/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d7f851064bcab0c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d81405211a3f163/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 228,
    athlete: 'Khadi Sagnia',
    title: 'Side hops',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d868129dead66b0/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d88d148fa86cc49/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d8a630a65620ec7/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 229,
    athlete: 'Khadi Sagnia',
    title: 'Side plank leg lifts',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09d9bb51c724f976b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09da0df258e262683/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09da2ab4754f3f2a2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 230,
    athlete: 'Khadi Sagnia',
    title: 'Single leg belt squat',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09daec86b17366d75/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09db327db1b760c1b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09db4ab00b9adf002/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 231,
    athlete: 'Khadi Sagnia',
    title: 'Single leg glute bridge',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09dca621ba4b7eb9c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09dd04a47ad3b98e4/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09dd21b9c471a2ed0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 232,
    athlete: 'Khadi Sagnia',
    title: 'Single leg hops to side',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09dd4aae8765e6e3d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09dd66f71c6b42739/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09dd21b9c471a2ed0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 233,
    athlete: 'Khadi Sagnia',
    title: 'Single leg Plate Quarter V Up',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09de28d6e4b1486bc/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09de6798bac40dee3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09de819b3bb73e0bd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 234,
    athlete: 'Khadi Sagnia',
    title: 'Single leg V Ups',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09df42c429b4416e9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09df7d716461cd491/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09df98c78beb196e7/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 235,
    athlete: 'Khadi Sagnia',
    title: 'Skaters',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09dfc433b1118af8e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09dfdeb42ca85b917/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09df98c78beb196e7/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 236,
    athlete: 'Khadi Sagnia',
    title: 'Split squat elevated feet',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e0f57c81375f755/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e13a79790c92901/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e1556f50ee205dc/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 237,
    athlete: 'Khadi Sagnia',
    title: 'Squat Jumps',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e1ca26fb29b0db3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e201ec569dc6d16/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e21b6d03dd62276/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 238,
    athlete: 'Khadi Sagnia',
    title: 'Squats',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e2d7a5ea7d4763a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e31e0689d9dfc14/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e3397396a6a4759/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 239,
    athlete: 'Khadi Sagnia',
    title: 'Stairs jumps',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e44e4d4d762e1fe/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e49856df3e7eb1d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e4bafc9d4eff212/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 240,
    athlete: 'Khadi Sagnia',
    title: 'Step up with knee drive',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e5d606b05d14408/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e620b8a7dda52e0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e641eddc6fb8bb5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 241,
    athlete: 'Khadi Sagnia',
    title: 'Step up',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e7ebc9dd538d182/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e87d9368c3811e3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e89a7e2224e79a2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 242,
    athlete: 'Khadi Sagnia',
    title: 'Step ups with knee drive',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e95e98a6d8d7e94/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e994902c347d7a2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09e9adfc050c4480f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 243,
    athlete: 'Khadi Sagnia',
    title: 'Supinated push ups',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ea33f64a2b1fb98/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ea6054903dfa484/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ea7933031dd7a26/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 244,
    athlete: 'Khadi Sagnia',
    title: 'Triple jump from 2 feet',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09eb125015d539ee7/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09eb4e8b9f247936c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09eb67cebbbc123e0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 245,
    athlete: 'Khadi Sagnia',
    title: 'V ups',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ec1a17cdddc30d1/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ec59f7eb7f2edc0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ec789b69bb9cda4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 246,
    athlete: 'Khadi Sagnia',
    title: 'Verical jump',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ece3a6791bf2c1e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ed1161f7a34a7de/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ed2bc766ce1df62/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 247,
    athlete: 'Khadi Sagnia',
    title: 'Vertical jump',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ed957243458aebb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09edd44355553feb4/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09eded8a29f6ee0bb/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 248,
    athlete: 'Unknown',
    title: 'Assisted Nordic hamstring curl',
    athletesSports: 'Track and field',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ee51009784f6d43/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ee7e80f05858f12/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ee97f7f9673506f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 249,
    athlete: 'Unknown',
    title: 'Assisted Nordic hamstring curls',
    athletesSports: 'Track and field',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ef0d0ff8b390234/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ef3f0a0a98bb6e1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f09ef58a5a22e67fb6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
   {
    id: 251,
    athlete: 'Artur Beterbiev',
    title: 'Barbel hand Exercise',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29a714d9dabeec480/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29a7f1e5059f8dcb5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29a80b8adff2caf9e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 252,
    athlete: 'Artur Beterbiev',
    title: 'Bench Press',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29aa3e2a0dbbfe9a1/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29aac08cd53014793/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29aadb30fae9ad9c1/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 253,
    athlete: 'Artur Beterbiev',
    title: 'Clap push ups',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ac3cbd9db814c60/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ac92fbdb8af2274/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29acabebebc09f8ee/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 254,
    athlete: 'Artur Beterbiev',
    title: 'Crunch medicine ball throws',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29afe60617c2f9d6f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b0ae1f22d042c08/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b0c91c63c4aef49/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 255,
    athlete: 'Artur Beterbiev',
    title: 'Deadlift 1',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b2e7cadf4d37521/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b37311bd3f6a8f1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b38e3aa15b0277a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 256,
    athlete: 'Artur Beterbiev',
    title: 'Deadlift 2',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b60e78c19dcbf84/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b67c9ac0cade140/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b694d956acbf1a3/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 257,
    athlete: 'Artur Beterbiev',
    title: 'Dumbell Rhytm Byceps Exercise',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b721e6598cd4e12/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b751688b9a1741f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b768d3648d5a5db/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 258,
    athlete: 'Artur Beterbiev',
    title: 'Dumbell Shoulder Exercise',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b7e4d521f32f8df/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b80ef9026292736/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b826ca6046320b8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 259,
    athlete: 'Artur Beterbiev',
    title: 'Hammer Punches 1',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29b9c838adb78a56b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ba5c7cc51794ba2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ba75f575f9c8731/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 260,
    athlete: 'Artur Beterbiev',
    title: 'Hammer Punches 2',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29bbc651572eb0802/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29bc267c27d8be4ce/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29bc3cfffbbad8f81/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 261,
    athlete: 'Artur Beterbiev',
    title: 'Hands exercise',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29bd7cece9b92d6c4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29bdce6e49d8e9fc2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29bde63615b8d30de/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 262,
    athlete: 'Artur Beterbiev',
    title: 'Hang cleans',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29bea4bcf9bb4bb18/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29bed37237f95e7d5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29bee9d779bbeb62a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 263,
    athlete: 'Artur Beterbiev',
    title: 'Rope exercise',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c0d6447266c5bdd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c194656b3104aa2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c1ad58f6e2db5ba/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 264,
    athlete: 'Donovan Mitchell',
    title: 'Agility Drill 1',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c3826feca1e352e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c3edaae5c5b1aad/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c407e87cedf38a6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 265,
    athlete: 'Donovan Mitchell',
    title: 'Agility Drill 2',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c5611ee9e6c0e5c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c5bc79e2452fce9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c5d5b9d54e97739/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 266,
    athlete: 'Donovan Mitchell',
    title: 'Cardio climbers 1',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c6e5e3178496e05/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c72a83031efbee4/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c74328567bbf0c9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 267,
    athlete: 'Donovan Mitchell',
    title: 'Cardio climbers 2',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c90671a9a0cd2a7/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c9787adecd14194/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29c992ac217049bf9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 268,
    athlete: 'Donovan Mitchell',
    title: 'Cardio exercise on machine',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ca43be96a21de77/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ca75e9c7d4ba309/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ca8e3ad2e9e2934/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 269,
    athlete: 'Donovan Mitchell',
    title: 'Lateral Movements',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29cd0663f21330c0d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29cd99fbb1e0dfaf8/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29cdb6327b6effdd3/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 270,
    athlete: 'Donovan Mitchell',
    title: 'Nordic Hamstring Curls',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29cf3e6d7a8b527a6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29cf962c9adcd6836/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29cfaddbf49487a35/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 271,
    athlete: 'Donovan Mitchell',
    title: 'Push ups',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d0589b08464b2ac/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d0942e39dbde050/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d0ac3e7a4e8759d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 272,
    athlete: 'Donovan Mitchell',
    title: 'Resisted Backwards Run',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d280577ce809bdd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d2e776f3281a0fd/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d30008a88a67746/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 273,
    athlete: 'Donovan Mitchell',
    title: 'Single leg Box jump with single leg landing',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d4b6324948a34bb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d591c2e46b5ecb5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d5abd37cbfaf6d8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 274,
    athlete: 'Donovan Mitchell',
    title: 'Skaters',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d6b8cb443d3dbcb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d6fa489590b8cd2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d713e3dcb764c2a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 275,
    athlete: 'Donovan Mitchell',
    title: 'Sled Pushing',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d8fea7351f22954/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d994c107f8ea7ba/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29d9acabb7e13f815/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 276,
    athlete: 'Donovan Mitchell',
    title: 'Yoga ball plank',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29da548db727f963c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29da846879170c5c9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29da9dde24fd5cac1/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 277,
    athlete: 'Frederick Richard',
    title: 'Nordic Hamstring Curl',
    athletesSports: 'Gymnastics',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29de07d96d596964e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29df39095b38eb03d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29df59f77870ed7fe/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 278,
    athlete: 'Khamzat Chimaev',
    title: ' Band pulls with side step',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e0a44100254ad6c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e11d36a1edc49b6/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e1362ce6158df44/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 279,
    athlete: 'Khamzat Chimaev',
    title: ' Rpetitive Dumbell Snatches',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e2d3aaa5f331867/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e3710212794a54d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e38c4d584bdda83/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 280,
    athlete: 'Khamzat Chimaev',
    title: 'Alternating Dumbell Pressess',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e701d800557823a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e7a4341a5c0e37a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e7c167390d316b3/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 281,
    athlete: 'Khamzat Chimaev',
    title: 'Arm Bicycle Cardio',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e95e2d87919b98e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e9d2ac9cdc6ae56/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e9f8286d0a2c2be/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 282,
    athlete: 'Khamzat Chimaev',
    title: 'Bench Press 1',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ea7721f5faec3c8/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29eab2c57f3ce5c7b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29e9f8286d0a2c2be/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 283,
    athlete: 'Khamzat Chimaev',
    title: 'Bench Press 2',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ec6aaaade8ff625/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ece5a91a720d6d9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ecfba6f538c1b90/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 284,
    athlete: 'Khamzat Chimaev',
    title: 'Chain Pulls',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ede437d0160014a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ee21a63c81b758e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ee392a163bff858/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 285,
    athlete: 'Khamzat Chimaev',
    title: 'Deadlift with Explosive Row',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29eeeeaac91584511/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ef56308ab4d9279/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ef6ece42079a385/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 286,
    athlete: 'Khamzat Chimaev',
    title: 'Deadlift',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29efd30fdb89188df/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29eff8df30ecb2ddd/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ef6ece42079a385/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 287,
    athlete: 'Khamzat Chimaev',
    title: 'Explosive Barbell Pushofs',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f218ad6d0509f76/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f2c2e0a68dab9c9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f2da18a7389d42f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 288,
    athlete: 'Khamzat Chimaev',
    title: 'Medicine Ball Slams 1',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f48c807aa496367/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f549c70ec0812c7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f5616efac5292dd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 289,
    athlete: 'Khamzat Chimaev',
    title: 'Medicine Ball Slams 2',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f63a990f8f6e8d4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f6710ccebb4797f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f68bb87016b6ebe/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 290,
    athlete: 'Khamzat Chimaev',
    title: 'Medicine Ball Slams And Shadow Boxing',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f75c9f36f24080a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f7991fff3f11f1d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f7b103d3e22cb62/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 291,
    athlete: 'Khamzat Chimaev',
    title: 'Rope Pulls',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f9496e88e348ffe/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f9c883ecbdcc1a7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29f9e0c6e5a9aa2b7/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 292,
    athlete: 'Khamzat Chimaev',
    title: 'Weighted Ring Pullups',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29faecd4d0bc8824b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29fb31b556ede6884/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29fb4c5d337e26f0b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 293,
    athlete: 'Khamzat Chimaev',
    title: 'Wrestling Exercise',
    athletesSports: 'MMA',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29fc0556191bad138/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29fc6629198856e56/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29fc832d41f1564b4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 294,
    athlete: 'Lebron James',
    title: ' Dumbell Front Raise with back step',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f29ff9b78b07471abb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a00789544861a4f8/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a009040b7ee1865e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 295,
    athlete: 'Lebron James',
    title: 'Ankle Stability Drill',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a029aac81019bc1d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a0339675f20ac07a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a0352661557501ce/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 296,
    athlete: 'Lebron James',
    title: 'Back Raises with Extension',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a0613f1818d4cace/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a0674526fb28dee0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a068bfed207a10b3/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 297,
    athlete: 'Lebron James',
    title: 'Banded Side Lunge 1',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a0bde5acc6c319a2/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a0e43c1534477345/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a0e6408ac4c93382/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 298,
    athlete: 'Lebron James',
    title: 'Banded Side Lunge 2',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a102472fdc9ef4ee/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a108c4b598a0db4b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a10a7812ff583db4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 299,
    athlete: 'Lebron James',
    title: 'Banded X Walk',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a11dbe1ded660e50/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a12249ff49560e88/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a123df25fb989971/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 300,
    athlete: 'Lebron James',
    title: 'Bar knee raises 1',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a14253c15483fd4b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a14a3d6744a28110/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a14bd5578ff49433/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 301,
    athlete: 'Lebron James',
    title: 'Bar knee raises 2',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a177a0c1f7629d64/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a17db085137e5c7f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a17f80a5a5407e0c/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 302,
    athlete: 'Lebron James',
    title: 'Barbell Biceps Curls',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a19c5f74e276ff27/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a1a3df633f30b652/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a1a561ec0540e2d6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 303,
    athlete: 'Lebron James',
    title: 'Bulgarian Split Squat ISO with Kettlebell Shoulder Circles ',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a1c80857fdb63adf/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a1d27c7ca4306769/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a1d42c7b9bf45c33/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 304,
    athlete: 'Lebron James',
    title: 'Bulgarian Split Squat',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a2098f12708f4865/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a21226ae98061d4a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a213bb08cf0323da/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 305,
    athlete: 'Lebron James',
    title: 'Cable pull with side lunge',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a257694df5cb3c44/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 306,
    athlete: 'Lebron James',
    title: 'Cardio climbers',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a2956038d9966356/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a2a7a6ef1b950ca0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a2a97ad8e30404a4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 307,
    athlete: 'Lebron James',
    title: 'DB Renegade Dumbell Row',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a2d95479d9d0e505/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a2ec9a1e224a4392/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a2ee4af7bf5b04a7/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 308,
    athlete: 'Lebron James',
    title: 'Dead Bug Dumbell Press',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a306e60ce85c1b0a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a30c50893c5d02ef/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a30dd8c217591626/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 309,
    athlete: 'Lebron James',
    title: 'Dumbell Push ups With Row',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a31ee48209a1133c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a32353be5afe2004/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a324ca842c626e23/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 310,
    athlete: 'Lebron James',
    title: 'Hip flexor leg raises',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a330c5c67b5d3777/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a333afb0a4001329/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a3353624a689aafb/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 311,
    athlete: 'Lebron James',
    title: 'Incline Dumbell Press',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a34adf652e364963/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a350667e46e31d10/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a35256b72b77e0d5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 312,
    athlete: 'Lebron James',
    title: 'Landmine shoulder press with rotation',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a36352d09d2ed2a7/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a367b62350f0c39f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a369358bdbeae9e4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 313,
    athlete: 'Lebron James',
    title: 'Neutral Grip Pull Ups',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a378293908571921/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a37c4b75cab6ac66/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a37db90e7633e524/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 314,
    athlete: 'Lebron James',
    title: 'Rotation Pull Drop Step',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a3a025f0af7df627/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a3abe3eaa113755c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a3ad854b421d0052/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 315,
    athlete: 'Lebron James',
    title: 'Side Lunge with feet reach',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a3df99330de31b70/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a3eb39c5ad907cfb/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a3ecf28c60f8618e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 316,
    athlete: 'Lebron James',
    title: 'Single leg lateral DB squat',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a4380bdc93b6a289/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a447a1f0c3750900/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a449b6121f7c86e2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 317,
    athlete: 'Lebron James',
    title: 'Single Leg RDL 1',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a46796bb96c3f690/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a46dcc247c1c5f09/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a46f7acbb947a544/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 318,
    athlete: 'Lebron James',
    title: 'Single Leg RDL 2',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a4934a281e44c9fa/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a499d9dd9dea97df/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a49b456a025c13e1/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 319,
    athlete: 'Lebron James',
    title: 'Single Leg RDL 3',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a4e0aa12990d1a55/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a4f3d9ed87e18e46/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a4f5eef7ad0bf3b9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 320,
    athlete: 'Lebron James',
    title: 'Stability shoulder press',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a50c02121c6a953d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a511e40c28a30542/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a51374db6970eeaf/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 321,
    athlete: 'Lebron James',
    title: 'Stability WAFF squats',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a5577eec92313186/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a569cc77995531e9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a56bc0057f3f95f2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 322,
    athlete: 'Lebron James',
    title: 'Trampoline Jumps',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a58e7d5440238afb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a59861b46a2d7975/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a59a09043f2bdfde/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 323,
    athlete: 'Lebron James',
    title: 'WAFF Ankle',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a5c7054061b4fa54/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a5dae5c0b585ce1f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a5dcb463e9a5a6f2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 324,
    athlete: 'Lebron James',
    title: 'Wide Squat',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a5f1627987298b16/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a5f8a11ffe9dd58c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a5fa539bd69e292e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 325,
    athlete: 'Lebron James',
    title: 'Yoga ball back raises 1',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a6109d097339f3fd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a615dd14521e67e5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a617748fc84d023b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 326,
    athlete: 'Lebron James',
    title: 'Yoga ball back raises 2',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a637611aaf24120c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a63eade654a547aa/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a6407ccafd76da89/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 327,
    athlete: 'Lebron James',
    title: 'Yoga ball side lifts',
    athletesSports: 'Basketball',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a65735104af12e6f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a65e5d31a21b3641/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a6603152032ff469/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 328,
    athlete: 'Noah Lyles',
    title: '2 hang cleans 2 shoulder presses',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a68ad22d9a3bd3b3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a69ce9881b4d7e0a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a6a20ad5dc4167d9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 329,
    athlete: 'Noah Lyles',
    title: '90 deg lifted legs pull ups',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a6aac797aac41521/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a6aed5235c95fb38/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a6b0d71ca4047b0e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 330,
    athlete: 'Noah Lyles',
    title: 'Adductor exercise on Machine 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7192084085d2934/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a73076e7e060cf09/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7327819e6bfbf71/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 331,
    athlete: 'Noah Lyles',
    title: 'Adductor exercise on Machine 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7631e441d219ab4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a779eb9cc4f27c37/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a77c47a33c0d8201/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 332,
    athlete: 'Noah Lyles',
    title: 'Adductor exercise on Machine 3',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7afa010ac9b94b0/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7bfe7cabc80f330/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7c21facb49c4c30/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 333,
    athlete: 'Noah Lyles',
    title: 'Back Squat 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7cc2976786ed226/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7d063da6e26d33f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7d1aa3fd7315757/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 334,
    athlete: 'Noah Lyles',
    title: 'Back Squat 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7ec9b453ccd14f9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7f2e59677acbc4f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a7f45451a36cdb46/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 335,
    athlete: 'Noah Lyles',
    title: 'Backflip',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a8065ab77f07e2b3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a80da17d20a67f50/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a80f27d2fbf4384d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 336,
    athlete: 'Noah Lyles',
    title: 'Banded Dumbell Step Up with Knee Drive and Shoulder Press',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a832a72ad4ea3164/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a83e33880faadd75/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a83fdc832a99e45f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 337,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a86e7a9a848a799b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a87a65049a87aeda/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a87c51626724d2f5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 338,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 170kg x 5',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a8b425feb847be63/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a8d2c0a25f69282e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a8d496226f80ce1e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 339,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 190kg x 4',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a916052bb645ea05/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a932c50cd73ad8c3/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a9352a33c93d593a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 340,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 2.mp4',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a973db69e2bca1c9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a981e0aacc3ddc4e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a983b110bae2add1/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 341,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 200kg x 3',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2a9f140db2804670c/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 342,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 250kg',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aa27b0e837c71c8a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aa4b9223dfda4d02/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aa4e7456ef223731/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 343,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 3.mp4',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aa8da1c9f366f6bb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aa9f740699a0f0d1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aaa17cbe03b822d6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 344,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 4.mp4',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aadfc22c48ac316d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aafa560a93e38189/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aafd423213e18790/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 345,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 5',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ab55d30c9e5051bf/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ab7b889fa25c6503/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ab7d865a27c00aeb/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 346,
    athlete: 'Noah Lyles',
    title: 'Box Jump',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ab88c8e70bb45e29/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ab8d23fea6b9f80c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ab8ea0de72d9ec8d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 347,
    athlete: 'Noah Lyles',
    title: 'Deadlift',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ab984d86afa88f73/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ab9b950a5b6821bc/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ab9ce5c9b191f865/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 348,
    athlete: 'Noah Lyles',
    title: 'Dumbell Incline Press',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2abd7c0ae55eebe4c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2abfd77663a736bd2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ac002cbeb18fd5a6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 349,
    athlete: 'Noah Lyles',
    title: 'Dumbell Shoulder Press 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ac37980bbe2cedda/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ac4148a7d22229b1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ac4306f0bc66fd9d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 350,
    athlete: 'Noah Lyles',
    title: 'Dumbell Shoulder Press 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2acbf3fb12733c630/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2acc2e07310230cd0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 351,
    athlete: 'Noah Lyles',
    title: 'Front squat 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aceec6dcb11d01d2/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ad0472850002e954/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ad06ec95225f61d4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 352,
    athlete: 'Noah Lyles',
    title: 'Front Squat',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ad12b138fb1b3987/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ad174b24bc4ff3d1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ad1923a198800843/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 353,
    athlete: 'Noah Lyles',
    title: 'Front Squats',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ad6f678218b06207/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ad71182c7d63215e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 354,
    athlete: 'Noah Lyles',
    title: 'Goblett Squat 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ad978e44fa542ae6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ada419931360acc4/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ada6e84fd8767850/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 355,
    athlete: 'Noah Lyles',
    title: 'Goblett Squat 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2add204e234141742/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2addaaa2684b57178/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2addc4629062f4b7f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 356,
    athlete: 'Noah Lyles',
    title: 'Handstand pushups',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ae1c22eb0eb4fe76/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ae3411626df0acab/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ae36403ab8514eb1/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 357,
    athlete: 'Noah Lyles',
    title: 'Hang Clean',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ae4bec9e3b8c4f29/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ae50c2af63f17bda/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ae527453d929c3dd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 358,
    athlete: 'Noah Lyles',
    title: 'Hip Thrust On Machine 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ae7322fc50fca7fd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ae8015736c1155f9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2ae8215bcad0d40ab/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 359,
    athlete: 'Noah Lyles',
    title: 'Hip Thrust On Machine 2.mp4',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aea1de2748de7624/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aedb58994d0b7290/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2aedea99c9bc127d0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 360,
    athlete: 'Noah Lyles',
    title: 'Hip Thrust On Machine 3',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2af8211ba2cc41fed/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 361,
    athlete: 'Noah Lyles',
    title: 'Isometric Crunch With Plate Rotation',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2afd94c4066ffe3c6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2afe133e30e2677b2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2afe2d7ee50defe96/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 362,
    athlete: 'Noah Lyles',
    title: 'Medicine Ball Swing and Slam 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b048c8e03f7f0edc/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b08b71d412fd3525/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b08dc5f95b063c4f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 363,
    athlete: 'Noah Lyles',
    title: 'Medicine Ball Swing and Slam 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b0d1da44453ac70e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b0ecc527e21194d9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b0ef7b843df5224c/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 364,
    athlete: 'Noah Lyles',
    title: 'Medicine Ball Swing and Slam 3',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b15d6c04d95ecd31/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b18aa8301e98bb11/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b18e05e890a2c961/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 365,
    athlete: 'Noah Lyles',
    title: 'Nordic Hamstring Curl 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b1b4b2aa2935c785/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b1c43f72e7e79608/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b1c682c4900c87cc/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 366,
    athlete: 'Noah Lyles',
    title: 'Nordic Hamstring Curl 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b1d6f0e1f477189b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b1dd06e58f0085ca/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b1df587e2c2c1a9d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 367,
    athlete: 'Noah Lyles',
    title: 'Nordic Hamstring Curl 3',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b1d6f0e1f477189b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b1dd06e58f0085ca/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b1df587e2c2c1a9d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 368,
    athlete: 'Noah Lyles',
    title: 'Nordic Hamstring Curl 4',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b32039ad93cf6791/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b3280b6cd6dc0bb5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b32a36e37e1267b3/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 369,
    athlete: 'Noah Lyles',
    title: 'Power Clean To Front Squat 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b331ce696bf33227/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b3342763fdbd5930/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b335cb8df4fe7a6f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 370,
    athlete: 'Noah Lyles',
    title: 'Power Clean',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b34e4b0e6ed3ced2/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b3535fc4cf8d7609/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b3553e5b4f88c19b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 371,
    athlete: 'Noah Lyles',
    title: 'Pull ups 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b375896f01355b29/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b37c329d1687d095/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b37e2b4b11b420db/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 372,
    athlete: 'Noah Lyles',
    title: 'Pull ups 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b39e470ddc1f773b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b3a48333591c59e4/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b3a69c9c67e25ee8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 373,
    athlete: 'Noah Lyles',
    title: 'RDL 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b3d944be6db4acac/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b3e4d951ac1124f7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b3e74d0d785f64cb/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 374,
    athlete: 'Noah Lyles',
    title: 'RDL 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b40f5e8c164a8b4b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b41650f2ad440e4e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b418e900d3ea9537/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 375,
    athlete: 'Noah Lyles',
    title: 'RDL 3',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b44d7d711377e1b5/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b45b9aa82ed0841c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b45e3c3a8e8492fe/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 376,
    athlete: 'Noah Lyles',
    title: 'RDL 4',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b47e338ffd5c2e6a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4862096a4b826fd/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b488b52b6357a1ac/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 377,
    athlete: 'Noah Lyles',
    title: 'RDL 5',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4a170ca0ec3f327/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4a60f563fd248fd/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4a811cdbdcd3e27/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 378,
    athlete: 'Noah Lyles',
    title: 'Reaction Exercise 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4c4e2309998e33f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4cb6cd2162906da/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4cdad2b08b28044/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 379,
    athlete: 'Noah Lyles',
    title: 'Reaction Exercise 2 ',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4f3c5a9e3056ba6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4fd607e3853d0c9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b4ff92340ceec7c1/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 380,
    athlete: 'Noah Lyles',
    title: 'Reaction Exercise 3',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b5297f8a230a85ee/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b53ab3fd735ce66b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b53cd62b7a0c50d6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 381,
    athlete: 'Noah Lyles',
    title: 'Snatch',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b54d7f53f5160e8e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b5514d1f7d6a9256/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b5530679ed770327/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 382,
    athlete: 'Noah Lyles',
    title: 'Training example',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b55ed029d6a7de76/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b561d7f70642b947/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b563987aff7642f0/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 383,
    athlete: 'Noah Lyles',
    title: 'Trap Bar Deadlift with bands',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b57ad0b067231c20/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b57f30b3e2f784d8/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b581438524e3a047/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 384,
    athlete: 'Noah Lyles',
    title: 'TRX Inverted Row',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b5a50a5626a449de/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b5ae8117538b3cff/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f2b5b0a51cdd8d1b49/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 385,
    athlete: 'Laviai&Lina Nielsen',
    title: ' Running simulation with plates',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d2f93c8de9cc95f9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d2fd8ed15bcb9a95/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d2ff9ed5326e226d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 386,
    athlete: 'Laviai&Lina Nielsen',
    title: ' Skater floor touches',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d30a38809c600731/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d30d51c46ac5ad7b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d30eea3f03d21089/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 387,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Back raises',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d31a59da76d77d25/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d31f5cf54e3ec570/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d3210225415028e3/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 388,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Box squats 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d33a33eb87a90818/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d34016e30b2405d7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d341bcc2b27798e8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 389,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Box squats 2',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d350d71db9bd246f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d356dd68a42a8d2c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d35873b8b8c58c6b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 390,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Box squats 3',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/ /view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d44e8127f18720eb/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d450a6663b936a7b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 391,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Box squats 4',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d47303992931a089/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d480c794333682c7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d48301f384da26fb/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 392,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Crunch feet touches',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d494a24624907317/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d49ad5694f602171/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d49ce06781402928/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 393,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Deadlifts',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d4ab820605dffd4a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d4b443a2915ba0b2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d4b67dd5384e7cb5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 394,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Drop jumps 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d4eb2e2afd7cd3bf/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d4ff5ddaddf8ebd9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d50128d3297f170f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 395,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Drop jumps',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d522b04bc8041dd9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d53be4e2fc6e6be0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d53dbe3522158d0a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 396,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Explosive scissor barbell pushing',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d559ee217841a089/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d5677be927fe2d17/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d5693b97e052b61f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 397,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Glute bridges',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d572cd4db79eb79c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d57583e0f4688578/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d57736c8034c8217/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 398,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Half squats and reactive jumps 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d5a114ed2138d738/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d5cc56cd32f67e9a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d5ce9268dbd6ffc1/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 399,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Half squats and reactive jumps 2',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d5f4949b74c399d0/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d615125a779a89ef/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d61725789ed8af29/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 400,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Hang cleans 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d649e0903c31e263/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d65146be9528cc67/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d652e49319ea4061/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 401,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Hang Cleans',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d67561de02094a04/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d69a903bbd3f839e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d69fda0d07e1f8f6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 402,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Landmine rotations',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d6ec8376d09a9a1f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d737f09b7c9a9402/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d73d4e4b7a7ea678/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 403,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Mountain climbers',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d7481325c55f8fe7/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d78a3af3adccf133/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d78be0d7f1b45ac4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 404,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Paused reactive RDL 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d79d914123d6009d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d7a3987f021d6e6e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d7a546daf6898b55/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 405,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Paused reactive RDL 2',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d7d470342174d09a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d7dbc8f1b9643ef5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d7dd9496aec25dfc/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 406,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Plank oblique twists',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d82c3fb3727361dd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d831c6a80ab2550e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d833659d491cbcc5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 407,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Power cleans 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d844392f4bd973c4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d84b08c25d3697c7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d84e5f3e468198ba/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 408,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Power cleans 2',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d863af26598dda02/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d86c2aad6def2248/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d86e09598ecfaa6c/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 409,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Pull ups',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d890266f3f80be7e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d89677e0bd483cc6/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8988c0a041729e9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 410,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Push ups',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8a2d9317a51c6c8/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8a7a87d74330ecf/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8a94d3383da4749/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 411,
    athlete: 'Laviai&Lina Nielsen',
    title: 'RDL 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8b9b66c403a440a/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8c0d886e39746fd/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8c310e3ef858bb2/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 412,
    athlete: 'Laviai&Lina Nielsen',
    title: 'RDL 2',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8e3ad2655653229/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8f482716b3af76e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d8f676d9287ace1d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 413,
    athlete: 'Laviai&Lina Nielsen',
    title: 'RDL 3',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d90eb160c831f9bf/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d9147e98f2677f32/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d9163f8ba0ee4f62/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 414,
    athlete: 'Laviai&Lina Nielsen',
    title: 'RDL 4',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d9371a821d3f4b38/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d94342e62ae65045/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d9452cc40e1cfef7/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 415,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Resisted sprint',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d95ceac8adc1a25d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d96342fd2392c478/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d964cffdcb9a108a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 416,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Russian twists',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d96fe2146c75449c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d983039d3b730680/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d98648b5ac365f37/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 417,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Side crunches',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d96fe2146c75449c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d9e7eaaad0893774/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d9eaef9ca8f4c732/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 418,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Single arm dumbell snatch 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7da1177321ff6a151/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d9e7eaaad0893774/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7d9eaef9ca8f4c732/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 419,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Single arm dumbell snatch 2',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7da7f65522fce4d4b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7da844ed05791304b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7da872ac497cdefd5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 420,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Sled sprints',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7dae0b6985fa96c93/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7db02921a5e115663/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7db07c7def9417e49/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 421,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Squat jumps',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7db28e10b250725d8/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7db32c9ec92dee44f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68f7db351209777949b1/view?project=68595ef3002478ec3cd8&mode=admin'
  },
   {
    id: 422,
    athlete: 'Noah Lyles',
    title: 'Diagonal Superman',
    athletesSports: '100m',
    videoURL: '',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff55e8d5191512bb10/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff55eb43387dff0271/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 423,
    athlete: 'Noah Lyles',
    title: 'Frog crunches',
    athletesSports: '100m',
    videoURL: '',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff562bd207a533dfcd/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff562e644d538a01bc/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 424,
    athlete: 'Noah Lyles',
    title: 'Reverse crunches easy',
    athletesSports: '100m',
    videoURL: '',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff56451541c0d99d58/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff56479ee7450f1acd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 425,
    athlete: 'Noah Lyles',
    title: 'Reverse crunches',
    athletesSports: '100m',
    videoURL: '',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff56777425d5f176a8/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff567a1b868b639029/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 426,
    athlete: 'Noah Lyles',
    title: 'Side crunches',
    athletesSports: '100m',
    videoURL: '',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff56a2d0037e260716/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff56a515dd3f3d19e6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 427,
    athlete: 'Noah Lyles',
    title: 'Superman easy',
    athletesSports: '100m',
    videoURL: '',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff56b1e06358af7483/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff56b3e5d85fb30662/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 428,
    athlete: 'Noah Lyles',
    title: 'Superman',
    athletesSports: '100m',
    videoURL: '',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff56d1d10d40ecb22e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff56d406915ba12dfa/view?project=68595ef3002478ec3cd8&mode=admin'
  },
   {
        id:  429,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff631e72664212591b/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63154f80882572a0/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63202c59b1b2779f/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Lateral Squat"
    },
    {
        id:  430,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff633b102d8e470680/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6334bb119707735b/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff633cb641003d41c2/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Nordic Hamstring Curls"
    },
    {
        id:  431,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63596787b4a95636/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff634e7d3b6f153744/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff635b4488ff381ee1/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Plank Jack Box Jump"
    },
    {
        id:  432,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff637c8b23fc1e0a2e/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6375586c7b838849/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff637e7f3666af1615/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Single arm dumbell snatch"
    },
    {
        id:  433,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6399a57b9d23c459/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63920236e16fd0d5/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff639b58f58ebecfba/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Sled sprints"
    },
    {
        id:  434,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63bb9e33e3566661/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63b2f0cc7c2b9b81/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63bd7c2555371947/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Bench Press 1"
    },
    {
        id:  435,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63d5a0bb8ea87813/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63cf5aa2e1b09831/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63d764fb04b6fb48/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Bench Press"
    },
    {
        id:  436,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff640264237f59b1f6/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff63f5ac7899b681a8/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff640427822857d2cb/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Deadlift"
    },
    {
        id:  437,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff641696e3fa9a7217/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64111acf8111d629/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6418601cf435e346/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Frog crunches"
    },
    {
        id:  438,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6466768a892b9f0b/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6450a0ecafdf7386/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64687bed0a71e10e/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Hang Clean 2"
    },
    {
        id:  439,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64772f7d963b8e2d/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6472aecff3161611/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6478c385728cdcb6/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "High Knees Skip"
    },
    {
        id:  440,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff648b0016cbccf762/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6485f08a3892fea8/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff648ca36fcc1890f7/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Hurdle Jumps"
    },
    {
        id:  441,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff649f878adf831506/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff649979dab1ebdcce/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64a13c847381630f/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Pause Hang Clean"
    },
    {
        id:  442,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64afd0b4faab9a55/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64ab5aace9472ac7/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64b18c93bcd90f22/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Plank Oblique Twists"
    },
    {
        id:  443,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64e2ba67ef6a9697/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64d8858ce63a00d4/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64e496944d964c17/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Power Clean"
    },
    {
        id:  444,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65033c890d629220/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff64fc1130ef862970/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6504ed4307d62278/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Power Cleans"
    },
    {
        id:  445,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6525c629d9943efb/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff651eac01893aec39/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65278dbff8ef3a5d/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Quad extension on machine"
    },
    {
        id:  446,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff654e0318f5af3734/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff654232f47434e40f/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff654fce6fcc907b24/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Quarter Squat + Reactive Jump"
    },
    {
        id:  447,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6568d6e6ad00255d/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6562968b1d9c2f61/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff656a88a99cc744af/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Quarter Squat 1"
    },
    {
        id:  448,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65980a05c555af4d/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff658ba6dad1aca1b4/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6599e2ffb9596549/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Quarter Squat"
    },
    {
        id:  449,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65b6d33488b72fa2/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65af6abf1f6511af/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65b8926f3122918d/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Reactive hang Clean on Clap"
    },
    {
        id:  450,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65d2e3792a5251bb/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65cc5232c6e9243b/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65d49f470a3c7ef9/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Reactive hang Clean on Clap"
    },
    {
        id:  451,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65e3b9ad40bfb586/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65de708055ad17a3/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65e586e0854895ac/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Reverse crunches"
    },
    {
        id:  452,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65f55f94afeae5b8/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65f047cf27502944/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff65f7197225970e5a/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Russian Twists"
    },
    {
        id:  453,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff661d67a96590fb7d/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff66142fa18d2cb00b/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff661f3048cf262024/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Single Arm Dumbell Snatch"
    },
    {
        id:  454,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff662e5d0334ac9094/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6629ad9e5fd953ee/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff66302be9139a949d/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Toe Touch Crunches"
    },
    {
        id:  455,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6657a2f8e99764a8/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff664e8d513bd03233/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6659732b9af75a89/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "Trap Bar Deadlift"
    },
    {
        id:  456,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff66669b660b553553/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff66636ef55f53d267/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff66685c5c0188eb95/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "V Ups Easy"
    },
    {
        id:  457,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff667c8d524a81b212/view?project=68595ef3002478ec3cd8&mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff6675b48f61d53dee/view?project=68595ef3002478ec3cd8&mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff667e42dffaba49ea/view?project=68595ef3002478ec3cd8&mode=admin",
        athlete:  "Laviai&Lina Nielsen",
        athletesSports:  "400m",
        title:  "V Ups"
    },
      {
    id: 458,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Bench Press 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7339925e7a3837b9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7342b76eee8227c4/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7344c229899bd54a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 459,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Bench Press',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff735e6d8bbf45b2e3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73659f42cadcd0cc/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7367aaab86412259/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 460,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Box Step Up with Knee Drive',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff738ec3434462516c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff739b2a8cfe606308/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff739d7657814bcba7/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 461,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Broad Jump',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73ac41733a71a51d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73b28333e2608f6c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73b47c47042f7e68/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 462,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Broad Jump',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73c14f09f40aff9d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73c63fd6bec19965/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73c82a6dee77d1ad/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 463,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Hang Clean',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73e2db87d3976ffd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73eeab39964281b0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff73f221f459a19c0b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 464,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Hurdle Jumps',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74095e163e2e4418/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff740fc557525254d7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7411dd4151b423be/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 465,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Kickback Single Leg RDL',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff742a73cad3cadd83/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7432934c5f8e3633/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7434b149473bad46/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 466,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Medicine Ball Crunches 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74507e83ffcff5f4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7457ac7bd7dffd75/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7459c7ad562bd985/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 467,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Medicine Ball Crunches',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74688946a79b2b4e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff746db47b18d31154/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff746faf6aa9c9e0c6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 468,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Medicine Ball Sit Up + Overhead Reach',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff747e02e1fde58774/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74832855e56e38c6/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7485204d917d7bf3/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 469,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Medicine Ball Throw Backwards 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff749b31091439869c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74a357c1f489d3dc/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74a5786ab2cc9d46/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 470,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Medicine Ball Throw Backwards',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74ab28418ec0dba8/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74ad66b237da49c8/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74af675b550fdef5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 471,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Medicine Ball Throw',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74ba6118b3b68526/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74bf0f5a0f7f715e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74c0e3bc96058325/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 472,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Medicine Ball Toe Touches',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74d729ec289bed8c/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74e44542470fcdd1/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74e664f43cb93c8e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 473,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Medicine Ball V Ups',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff74f695c64646b511/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff750093f062b44ced/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7502a3243b481199/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 474,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Mountain Climbers',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff75101391f656adc3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff75149983f53f4d4c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7516b397e8b4406f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 475,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Power Clean 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff753124e916f3052d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff753f2c1ca443e6ec/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff75413a2d2ce1a081/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 476,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Power Clean',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7567a85c9c2b6c91/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7577cc917bd0a17c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff757a4400e3292360/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 477,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Resistance Sprinting 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff758cee48433c6ac3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7593b1b950e210cc/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7595c76dd934ab8d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 478,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Resistance Sprinting 2',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff75ab8425bf42ccc1/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff75b3db91979c7a48/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff75b5d394b464a2ba/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 479,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Resistance Sprinting 3',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff75f02f1cdb8c2d75/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff75fea24a95332d95/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7600f31c6ae9ffe5/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 480,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Resistance Sprinting 4',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76131544b30a2815/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7619b3ee1d00c2c0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff761ba05c1187072b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 481,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Resistance Sprinting',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff762d694363c489a3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7633761fe9d5557c/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff763567195abe9bcd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 482,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Russian Twist + Overhead Reach',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff764c31ea0d44bf59/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7654378ed2aa2250/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76566dd78f895dfa/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 483,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Russian Twist Medicine Ball Throw',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff766cc687816c3fa7/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7673ce3c601c712e/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7675d752cad94118/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 484,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Russian Twists',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76839abd7475b0f3/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7688898a1029acfd/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff768aa210d03ecb37/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 485,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Side Plank Raises',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff7696535b54f03b8e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff769a43f5f23c96b6/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff769c477a0ab0ccbf/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 486,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Single Leg Sliders',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76b025e6877803e9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76b7181ec03295e5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76b90d47a8161e9d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 487,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Squat',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76d2ca23c8c388fb/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76da7f705e1f9129/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76dc929f927a9c12/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 488,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Trap Bar Deadlift 1',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff76fda6db2f2f11c5/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff770b2eb6d36eb561/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff770d51045de735e8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 489,
    athlete: 'Laviai&Lina Nielsen',
    title: 'Trap Bar Deadlift',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff771a96e9ab6426b9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff771f634237ba553b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff772163c4cb7eeccd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 490,
    athlete: 'Laviai&Lina Nielsen',
    title: 'V Ups',
    athletesSports: '400m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff772d48d5a0fccf80/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff773250a2d785897f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/68ff77346b7fbfe68425/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 491,
    athlete: 'Ivana Spanovic',
    title: 'Broad Jump',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff917e195f55cabba1/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff91840e1cfc08eaa8/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9185afdbff9861fe/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 492,
    athlete: 'Ivana Spanovic',
    title: 'Hurdle Jumps 1',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff91a5ebccfb7a7f7b/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff91adb942a3fafccb/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff91af71b3d5600d9c/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 493,
    athlete: 'Ivana Spanovic',
    title: 'Hurdle Jumps',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff91b8766912b60f18/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff91bc27c72d8e652a/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff91bda998afd143d8/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 450,
    athlete: 'Ivana Spanovic',
    title: 'Medicine Ball Crunches With Throw',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff92e6066fefeb4f02/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff92ebd52b02a32dda/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff92ed7e0e9dd33834/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 451,
    athlete: 'Ivana Spanovic',
    title: 'Medicine Ball Russian Twist With Throw',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff92fdee3b8abda59e/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93020dd2356e43a8/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9303b3e1d6fee216/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 452,
    athlete: 'Ivana Spanovic',
    title: 'Medicine Ball Throw Backwards',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9321c95d0f94c6a6/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9328ee4c5e1fa103/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff932aa0a0fa1a2d1c/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 453,
    athlete: 'Ivana Spanovic',
    title: 'Power Clean 1',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9349e18d0c6c93cc/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9352316fd002b6dd/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9353e6f15c97c806/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 454,
    athlete: 'Ivana Spanovic',
    title: 'Power Clean',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff936bbc47892d8217/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9373b071a30bbe44/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9375624fe89bbd49/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 455,
    athlete: 'Ivana Spanovic',
    title: 'Reverse Crunches',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff937cc5c97606458c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93809ff1843aa330/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff938230cf94ab4c0c/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 456,
    athlete: 'Ivana Spanovic',
    title: 'Roman Chair Extensions WIth Medicine Ball Throw',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93925cb02d7b5ea6/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93979528e0f59583/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93993b30feb714f8/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 457,
    athlete: 'Ivana Spanovic',
    title: 'Squat Jumps 1',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93ad7ba1c504dfb6/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93b6bf5a04ce4c16/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93b898aef8ae2d02/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 458,
    athlete: 'Ivana Spanovic',
    title: 'Squat Jumps',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93c72b8adfffcbca/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93ccce56aa7c65ab/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff93ce76163118b19f/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 459,
    athlete: 'Ivana Spanovic',
    title: 'Stair Squat Jumps',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff940468f19329034a/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff94149980574c4bbf/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff941699909935e1c6/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 460,
    athlete: 'Ivana Spanovic',
    title: 'Stairs Bounding 1',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9428df53ee3fde92/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff94301c8c429a11cb/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9432088c53103fda/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 461,
    athlete: 'Ivana Spanovic',
    title: 'Stairs Bounding',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff94646e53e5cb340e/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9476e85251736178/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff9478dda9489680f1/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 462,
    athlete: 'Ivana Spanovic',
    title: 'TRX Plank to Handstand Walk',
    athletesSports: 'Long Jump',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff94924390d5e30e6a/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff949a349c74fd7482/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/68ff949bd46c4a344891/view?project=68ff7ff10012988be55f&mode=admin'
  },
   {
    id: 463,
    athlete: 'Usain Bolt',
    title: 'Abs crunch on machine',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ec05fa83262d9fd/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ec22722c77ae1c9/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ec351621722bedc/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 464,
    athlete: 'Usain Bolt',
    title: 'Back Extension on Roman Chair 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ec81f4dbda78616/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ec9d3d8fc02942d/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ecbf309bf17a945/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 465,
    athlete: 'Usain Bolt',
    title: 'Back Raise Medicine Balll Throw',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ecf657f3b0ed955/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ed17a40ccc0cb2a/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ed29b81686710cd/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 466,
    athlete: 'Usain Bolt',
    title: 'Calv raises',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ed67831df13b7a5/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ed7c7d72c92cbc5/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ed9b9dacc819ce9/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 467,
    athlete: 'Usain Bolt',
    title: 'Crunch Knee Drives',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085edbab6fed535b0d/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085edcda9688397351/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ede71342239819f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 468,
    athlete: 'Usain Bolt',
    title: 'Crunch Medicine Ball Throws',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ee2d8b463d7654f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ee56c5007f58737/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ee6979ef481b9fe/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 469,
    athlete: 'Usain Bolt',
    title: 'Crunches Single Leg Knee Raises',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085eeb3f15b1aa244e/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085eedb03977186ea6/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085eef0503fbaa8dee/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 460,
    athlete: 'Usain Bolt',
    title: 'Crunches',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ef3cd921528a892/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ef5498964665009/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085ef7890be3e0cd9e/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 471,
    athlete: 'Usain Bolt',
    title: 'Donkey Kicks on machine',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085efd0f37b8bf0973/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085efe8f49201f7fe6/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085effb847849b92a8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 472,
    athlete: 'Usain Bolt',
    title: 'Hip Flexor Knee Drives',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f03674e3727c477/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f04e3dba3ebca50/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f072ff4ad081ce4/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 473,
    athlete: 'Usain Bolt',
    title: 'Hurdle Stepovers',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f0e781474079df4/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f122d5433de1248/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f1370e897a018a8/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 474,
    athlete: 'Usain Bolt',
    title: 'Knee extension on machine',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f16d74acb831732/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f185f7848639815/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f1a7268d93fd202/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 475,
    athlete: 'Usain Bolt',
    title: 'Leg press',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f25b1016ff04ea5/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f2c9dc13a008d3b/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f2e28895b1e961f/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 476,
    athlete: 'Usain Bolt',
    title: 'Mountain Climbers',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f35db06f8e12537/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f3950d409c89fa0/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f3b1ec2f7913270/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 477,
    athlete: 'Usain Bolt',
    title: 'Plank',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f3cc12706cac7a2/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f3dec6618df50a2/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f3f1ff68bbc53b1/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 4768,
    athlete: 'Usain Bolt',
    title: 'Repetetive Hang Cleans',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f42ba4ca7946ec2/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f44b24ad502b662/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f4608b06a03e580/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 479,
    athlete: 'Usain Bolt',
    title: 'Reverse crunch knee drives',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f49a5eabd3eb653/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f4ba58d50f95005/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f4cbbab98c57e17/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 480,
    athlete: 'Usain Bolt',
    title: 'Russian Twists 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f507e708bfc9b88/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f51dc6c80f93363/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f53c19fb87d96db/view?project=68595ef3002478ec3cd8&mode=admin'
  },

  {
    id: 482,
    athlete: 'Usain Bolt',
    title: 'Russian Twists',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f5e7cfaa37860ce/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f5fce24f862c014/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f60e3b6689d94f6/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 483,
    athlete: 'Usain Bolt',
    title: 'Scissors',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f6448a6b9061f7b/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f65979a837c8de6/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f678bea8fdd2c4b/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 484,
    athlete: 'Usain Bolt',
    title: 'Single Leg Crunch Toe Touches',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f6a79c21d9dba54/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f6c809510159730/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f6de14570a2a589/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 485,
    athlete: 'Usain Bolt',
    title: 'Sit ups with barbell press',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f785f2563363fd6/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f7c969cb1a3c984/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f7de7901e301a3a/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 486,
    athlete: 'Usain Bolt',
    title: 'Step up Knee Drives',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f87376e43a4a902/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f8b63f37005ee91/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f8caefebb29ea20/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 487,
    athlete: 'Usain Bolt',
    title: 'Techincal Skips Over Cones',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f940e1483d84bf1/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f98439231210f9f/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f999cc7a2264a4d/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 488,
    athlete: 'Usain Bolt',
    title: 'TRX Plank Knee Drives',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f9e0da0e66a21b9/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085f9f88439c313d41/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085fa1d5195c5a0798/view?project=68595ef3002478ec3cd8&mode=admin'
  },
  {
    id: 489,
    athlete: 'Usain Bolt',
    title: 'Yoga Ball Crunches',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085fa4d3e886fd565f/view?project=68595ef3002478ec3cd8&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085fa72121b26f68f7/view?project=68595ef3002478ec3cd8&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68e4b710003657d0d0d9/files/69085fa84ad2d2d09ea4/view?project=68595ef3002478ec3cd8&mode=admin'
  } ,
  {
    id: 490,
    athlete: 'Noah Lyles',
    title: '45Deg wall sprint',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860145fd4efec7c69/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908601b29d8b34d27ae/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908601caf4c8ae147c7/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 491,
    athlete: 'Noah Lyles',
    title: 'back raises',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086026aebbab31e2c8/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908602ab4c0b992809d/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908602bea21a1ae8538/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 492,
    athlete: 'Noah Lyles',
    title: 'Crunches',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908603c63d22b1c695d/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086045049719ce1280/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860469308e7f66981/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 493,
    athlete: 'Noah Lyles',
    title: 'Leg Throws',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086050e92cbe031b2f/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086054338fc24cb308/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086056c8a90525c0d5/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 494,
    athlete: 'Noah Lyles',
    title: 'Mountain Climbers',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086067964d608b9926/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860705d05bc1cb5a9/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086071af1825c8f302/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 495,
    athlete: 'Noah Lyles',
    title: 'Opposite foot and hand raise',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908607ba951f29eb9b8/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908607f4418558b59d5/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086080b515f9f26316/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 496,
    athlete: 'Noah Lyles',
    title: 'Opposite leg toe touch',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860a01fdfa3c8565f/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860a824fdb06829d8/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860aaa02fe5b6463f/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 497,
    athlete: 'Noah Lyles',
    title: 'Plank',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860beeb3828ffd407/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860c3f2f1d03dab0c/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860c6ab5948af7d98/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 498,
    athlete: 'Noah Lyles',
    title: 'Pogo hops',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860da59976738767b/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860e5c36797f70fc4/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860e9768729133527/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 499,
    athlete: 'Noah Lyles',
    title: 'Push Ups',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690860fcb3c8defc072c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690861033c4aee2aac62/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086105d0b26555e94e/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 500,
    athlete: 'Noah Lyles',
    title: 'Superman raises',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908611a11732e7ab093/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086124d8c498006c28/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086130432d0e268289/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 501,
    athlete: 'Noah Lyles',
    title: 'Superman',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908614488632d59df15/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908614b1c1097b908be/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908614e6a736f25945a/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 502,
    athlete: 'Noah Lyles',
    title: 'Toe Touches',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908616095efedab681c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690861677707dcfb5d9b/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908616aacfada5a9c48/view?project=68ff7ff10012988be55f&mode=admin'
  }, {
    id: 503,
    athlete: 'Dmitry Bivol',
    title: 'Alternating Medicine Ball Push Ups',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ad72329a6e62351/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ae34745499f815e/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ae5788a355c3037/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 504,
    athlete: 'Dmitry Bivol',
    title: 'Band Assisted Explosive Pushups',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086aee081f827faf2e/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086af14948ad18251b/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086af2e319797c6851/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 505,
    athlete: 'Dmitry Bivol',
    title: 'Box Jump',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b015ad9a0a1ab98/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b0636a4a9e7984d/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b084158845c0f9a/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 506,
    athlete: 'Dmitry Bivol',
    title: 'Clap Pushups',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b0e41eb590c784c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b10f0e8fd692a87/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b12b9e1991c6771/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 507,
    athlete: 'Dmitry Bivol',
    title: 'Crunch Dumbell Twists',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b1f0f1497e15f23/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b22ca8452873d4f/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b247391debe201f/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 508,
    athlete: 'Dmitry Bivol',
    title: 'Crunch Rotations With Partner Pushing',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b364a3066b63f4e/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b3b94ba881697c1/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b3f8fbc42f12e4f/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 509,
    athlete: 'Dmitry Bivol',
    title: 'Dead Bug Dumbell Row',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b5dce1e72652b7c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b659d921655ad73/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b68c0ca32c01efa/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 510,
    athlete: 'Dmitry Bivol',
    title: 'Dip Bar Explosive Knee Drives With Push',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b75980c525b38a8/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b78d68e86778ae3/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b7a7b8d726a2959/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 511,
    athlete: 'Dmitry Bivol',
    title: 'Dumbell Bench Press Explosive',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b856fef376410da/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b88f41446858c88/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b8a9b04bfc7ebb5/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 512,
    athlete: 'Dmitry Bivol',
    title: 'Explosive Puush Ups',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b91b37cca2611bb/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b9565dcdcee59c2/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b96e588f9543c90/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 513,
    athlete: 'Dmitry Bivol',
    title: 'Flying Cards Catching',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086b9e026a9d1c6ec5/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ba0c2ead0259a01/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ba24f4730b378bc/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 514,
    athlete: 'Dmitry Bivol',
    title: 'Hand Exercise',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bb3c2f9deeb239b/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bb963e573c9a4b5/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bbb27bd7de715ab/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 515,
    athlete: 'Dmitry Bivol',
    title: 'Isometric Band Holds',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bc0de98986d663a/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bc38a24c3bfc474/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bc5d88da0cce4b2/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 516,
    athlete: 'Dmitry Bivol',
    title: 'Isometric Hook',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bcff194a99438b7/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bd3719038d01f10/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bd51687794e7a17/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 517,
    athlete: 'Dmitry Bivol',
    title: 'Kettlbell Core Stabilty',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086be1ee9fc6ff43d7/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086be5b448a54ced78/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086be75a976008f95d/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 518,
    athlete: 'Dmitry Bivol',
    title: 'Lateral Hops',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bed8f6e49423212/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bf042b70ca74430/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bf1e7ae5eb8bdc0/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 519,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Crunch Hooks 1',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bfc838ef4e73233/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086bffd58a77c231b9/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c016c5225d176c2/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 520,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Crunch Hooks',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c09913902faacfc/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c0d561188a496e8/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c0f0d7665393a0c/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 521,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Explosive',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c153b7d30c60b67/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c17d723aefd3014/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c1964aa764f3e8e/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 522,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Slams',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c202db8ccd20e6d/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c22bacc0cd8646a/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c244116cadf6204/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 523,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Wall Throws',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c2cd707482eb766/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c2feb20b25439a1/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c31781c39370ebe/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 524,
    athlete: 'Dmitry Bivol',
    title: 'Plank Rotations',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c3801d633632542/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c3b62b203738004/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c3cd86397f35f5a/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 525,
    athlete: 'Dmitry Bivol',
    title: 'Plank Walkovers',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c45e5131223d656/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c4b2f28389e959b/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c4cd2788a038926/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 526,
    athlete: 'Dmitry Bivol',
    title: 'Push Ups',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c53035a577f2838/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c55b97657adf504/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c5755610ffefb8b/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 527,
    athlete: 'Dmitry Bivol',
    title: 'Rock Slams',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c6554898110882c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c6b7ae093a6267c/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c6d48cfb41366ce/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 528,
    athlete: 'Dmitry Bivol',
    title: 'Rock Throw and Catch',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c7a986187f87fce/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c7f65329a8a2243/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c8111df803eec89/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 529,
    athlete: 'Dmitry Bivol',
    title: 'Roman Chair Medicine Ball Slams 1',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c896927973e07c3/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c8d7c96fe11226b/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c8ef08dae42efa9/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 530,
    athlete: 'Dmitry Bivol',
    title: 'Roman Chair Medicine Ball Slams',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c9944a57acd1edc/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c9d444653833a99/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086c9ed44131a8b7a6/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 531,
    athlete: 'Dmitry Bivol',
    title: 'Rope Swings',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ca7e21ce0ee3ce2/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cab6281f0e56b02/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cad0922b2372321/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 532,
    athlete: 'Dmitry Bivol',
    title: 'Row to punches',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cbc118d3e2b9da7/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cc1e74b6fcb1548/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cc384efcc8dd6f1/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 533,
    athlete: 'Dmitry Bivol',
    title: 'Seated Medicine Ball Swing Slams',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cd3965df920a38d/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cda8a5827b808eb/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cdc2a3715d97a46/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 534,
    athlete: 'Dmitry Bivol',
    title: 'Shoulder Mobility 1',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ce3121688ffe4b7/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ce64902bf590d74/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ce7d292a1a33edb/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 535,
    athlete: 'Dmitry Bivol',
    title: 'Shoulder Mobility',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086ceeed797f51bd1c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cf1f3aefdefeaf9/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086cf37d266725ceb8/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 536,
    athlete: 'Dmitry Bivol',
    title: 'Shoulder Pushing Exercise',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d00b114c6cf0771/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d055df837e10328/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d06edee2d140dbc/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 537,
    athlete: 'Dmitry Bivol',
    title: 'Single Arm Alternating Rock Throw and Catch',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d16d9f9b9c0601a/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d1d52e10b3ba1d0/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d1f193e9384a50a/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 538,
    athlete: 'Dmitry Bivol',
    title: 'Single Leg Jump Medcine Ball Slams',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d29a2d10ee19dd7/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d2ed93ea7e2ebfa/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d30736e46f3103b/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 540,
    athlete: 'Dmitry Bivol',
    title: 'Sit Ups',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d382cc88a27f660/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d3c46b789465148/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d3dda97922890aa/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 541,
    athlete: 'Dmitry Bivol',
    title: 'Skate Ankle Stability',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d4b3d0e1a6398e9/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d506a102f9be1c2/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d5237d7d89103f2/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 542,
    athlete: 'Dmitry Bivol',
    title: 'V Ups 1',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d57a6a705e2a589/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d5a638d793fd7e4/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d5bef9331c40ff1/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 543,
    athlete: 'Dmitry Bivol',
    title: 'V Ups',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d63aee7a6c919a3/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d66f40f61f3d533/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d688cdbb1374175/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 544,
    athlete: 'Dmitry Bivol',
    title: 'Yoga Ball Plank CIrcles',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d71cc5153d95739/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d7657a812d8bd64/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086d780c03bc22b777/view?project=68ff7ff10012988be55f&mode=admin'
  },
   {
    id: 545,
    athlete: 'Yohan Blake',
    title: 'Back Extension on Roman Chair 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086410cd2f38af36a9/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086426232bcdb75d67/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908642a367915527f7b/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 546,
    athlete: 'Yohan Blake',
    title: 'Back Extension on Roman Chair 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908645198ae5a9dfae2/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908645b892aa5c53e66/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908645d31184f06f42e/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 547,
    athlete: 'Yohan Blake',
    title: 'Back Extension on Roman Chair 2',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086472d35e76d3f6c0/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908647deae697bb1554/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864812cc64ed091d6/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 548,
    athlete: 'Yohan Blake',
    title: 'Back Extension on Roman Chair',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864a8a381356adb4a/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864b2549e1d7de41e/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864b3d7313b79692e/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 549,
    athlete: 'Yohan Blake',
    title: 'Bar Knee Raises',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864c94fa5c9b09e74/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864ce44bdca9e5f99/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864cfabf8a954d107/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 550,
    athlete: 'Yohan Blake',
    title: 'Calv Raises on Machine',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864e6ed615100cf46/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864ee4cc9b3ccb92a/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864efc189e9494cf7/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 551,
    athlete: 'Yohan Blake',
    title: 'Deadlift 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864f42a2eeefe5c35/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864f688071deb6fcf/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864f7bfd2a0938f37/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 552,
    athlete: 'Yohan Blake',
    title: 'Deadlift',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690864feba7b90ed587d/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865014d6d30cbc3f2/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908650299422c9a1974/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 553,
    athlete: 'Yohan Blake',
    title: 'Donkey kick on Machine',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086518c343a5515b89/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908651fbce80468aa0a/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865212e83c8e3af02/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 554,
    athlete: 'Yohan Blake',
    title: 'Dumbell Row 1',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086542bbaa060823cb/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908654b5cd6c830f307/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908654d113f502748a3/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 555,
    athlete: 'Yohan Blake',
    title: 'Dumbell Row',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908656ee706f265698c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908657699c6282c1b57/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865782b619a78b14d/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 556,
    athlete: 'Yohan Blake',
    title: 'Hip Flexor Knee Drives',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908659e73cf9666f7b3/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865a840cca731bd44/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865a9b95a1fd8741e/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 557,
    athlete: 'Yohan Blake',
    title: 'Hip Thrusts',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865bc4ab797ec769c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865c12a1b360c4708/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865c26a33a06d576b/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 558,
    athlete: 'Yohan Blake',
    title: 'Hurdle Jumps',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865c7af60a1b3d063/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865ca712cddd7cc03/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865cc220edfa3b2b8/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 559,
    athlete: 'Yohan Blake',
    title: 'Incline Bench Press',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865db8a9ba1bcc8b9/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865e09ae1d1250e2b/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865e1f10d6855f1bc/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 560,
    athlete: 'Yohan Blake',
    title: 'Knee Raises Dip Bar',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865ec7f7bb50661ed/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865f026e1e69d2dd8/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865f18e8b76568a20/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 561,
    athlete: 'Yohan Blake',
    title: 'Kneeling Jumps to Box Jump',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690865fd0d204c4946c1/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866006664fa0a99c5/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086601c217a82b0bdf/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 562,
    athlete: 'Yohan Blake',
    title: 'Lunges',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086614088380f5f4c6/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086618c20881d36b24/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908661a382b48457853/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 563,
    athlete: 'Yohan Blake',
    title: 'Medicine Ball Wall Throw Backwards',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866245efe6fbe6236/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086628888de54ada3f/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908662a01c16019582c/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 564,
    athlete: 'Yohan Blake',
    title: 'Medicine Ball Wall Throws',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086638a84bf6c91f51/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908663d5024cbe00bb4/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908663ea176d2172745/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 565,
    athlete: 'Yohan Blake',
    title: 'Nordic Hamstring Curls',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908665ae91ae9247181/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086661039074852a24/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866626f02b6f7aa9a/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 566,
    athlete: 'Yohan Blake',
    title: 'Quarter Leg Press',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866820b178db3af55/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908668b2ea1154d31a0/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908668ca9e330d7ee70/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 567,
    athlete: 'Yohan Blake',
    title: 'Resisted Sprinting',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086699f093f89236c2/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908669ee620e1c969d2/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866a03bd12d1df090/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 568,
    athlete: 'Yohan Blake',
    title: 'Seated Medicine Ball Throw Backwards',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866abc593d4ef8f30/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866af37c75817fa8b/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866b0826426d0bd5b/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 569,
    athlete: 'Yohan Blake',
    title: 'Seated Resisted Jumps',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866bb36eb093e18a8/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866bebc4e709d2bdc/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866c08925c6d8ece5/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 570,
    athlete: 'Yohan Blake',
    title: 'Shoulder Press',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866d82fd0f770b9bb/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866df77878614a9fd/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866e326eab1301126/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 571,
    athlete: 'Yohan Blake',
    title: 'Side Plank Raises',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690866fd3e8af537c234/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086703b6598e0ce3fc/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908670529c6b3e93330/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 572,
    athlete: 'Yohan Blake',
    title: 'Single Leg Glute Bridge',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086714b9315338af31/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690867196f9b5f30a085/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908671ad345951d863b/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 573,
    athlete: 'Yohan Blake',
    title: 'Single leg seated squats',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086743acc2e15e9c21/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908674cb79e5ccc4398/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908674e3ef303b4306f/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 574,
    athlete: 'Yohan Blake',
    title: 'Sled Pushing',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086751a2142b629b5c/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086753d87e18c6455f/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908675514d886e3334c/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 575,
    athlete: 'Yohan Blake',
    title: 'Step up',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086773384092232c38/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086779bab3f2734845/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908677b34bc697d6ab7/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 576,
    athlete: 'Yohan Blake',
    title: 'Trap Bar Jumps',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908678f2b2f137182b8/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908679504c78be9c324/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69086796d985cb193d74/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 577,
    athlete: 'Yohan Blake',
    title: 'Treadmill Running',
    athletesSports: '100m',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690867b0b9b82bb53875/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690867b8006cb0a97795/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690867b9af95e1f122a2/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 578,
    athlete: 'Gennady Golovkin',
    title: 'Crunches With Twist',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/690899dbd3417d49cb8f/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 579,
    athlete: 'Gennady Golovkin',
    title: 'Crunches',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089a329e78aa3d6ecb/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089a4826449ab8d51e/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089a4b884a2a08e206/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 580,
    athlete: 'Gennady Golovkin',
    title: 'Explosive Presses',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089a5eabadc98c37e0/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089a65e42da0aecb6d/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089a67aa37903b3c5d/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 581,
    athlete: 'Gennady Golovkin',
    title: 'Knee Partial Push Ups',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089a96f100946e148e/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089aa43bf10cbbb89d/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089aa64b9d73aa72ab/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 582,
    athlete: 'Gennady Golovkin',
    title: 'Light dumbbells directs',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089b2a5b3e28a305b2/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 583,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Backword Circles',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089b89f04317913b79/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 584,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Flys',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089bf39e8f01d809dd/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 585,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Forwarrd Circles',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089c630ec49997f516/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 586,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Ovations',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089cd56722677d1884/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 587,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Shakers',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089d5a9f7429726afe/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 588,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Vertical Directs',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089ddd8fe3ca0b6ac0/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 589,
    athlete: 'Gennady Golovkin',
    title: 'Medicine Ball Full Squat Jumps',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089def72ed84f65682/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089df550d29c3113c9/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089df70e36b15a1f14/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 590,
    athlete: 'Gennady Golovkin',
    title: 'Medicine Ball Jumps',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089e1d97b9864c42ca/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089e284e55749bcd3d/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089e2a5e7cee476750/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 591,
    athlete: 'Gennady Golovkin',
    title: 'Medicine Ball press jumps',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089e79ee6a4cb7764e/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089e7c40b9f14e2637/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 592,
    athlete: 'Gennady Golovkin',
    title: 'Overhead triceps extensions',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089ea3a64222b70b62/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089eb17e4c34f8dde6/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089eb3682f411e6eba/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 593,
    athlete: 'Gennady Golovkin',
    title: 'Partial reverse crunches',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089efb871c6cdfba0a/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089f0bcf5787bca8e3/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089f0e046bb996c9e0/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 594,
    athlete: 'Gennady Golovkin',
    title: 'Rope skipping',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089f3e615295c60bc8/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089f4ab1dad44a34e6/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089f4c960896a16bb3/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 595,
    athlete: 'Gennady Golovkin',
    title: 'Shoulder circles to left',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089f801b124e676c41/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 596,
    athlete: 'Gennady Golovkin',
    title: 'Shoulder Elbow Circles',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089fa48d184325fb57/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089fafd427b2710c41/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089fb1c57833c6e0bf/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 597,
    athlete: 'Gennady Golovkin',
    title: 'Side Crunches 1',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089fe24dcd86f101d2/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089fee9e85d6f9d734/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69089ff09db181b9cb54/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 598,
    athlete: 'Gennady Golovkin',
    title: 'Side Crunches',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908a021450bdedbe0e3/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908a0329b422b905bfb/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6908a03496046b19aa8d/view?project=68ff7ff10012988be55f&mode=admin'
  },
   {
        id:  599,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d0cd89fbafe2932/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d0985fbba75da18/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d0e6cfa92513c5f/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Angled Side Steps"
    },
    {
        id:  600,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d19200b9289600d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d1663f469228f17/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d1abbc0f57f36c9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Double Jab and Move"
    },
    {
        id:  601,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d2f569327862571/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d2b0c942cfbc476/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d310e0a71a58baa/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Double Jab"
    },
    {
        id:  602,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d4b482b0de86a19/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d4618bafcadbc58/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d4cac9f4d2d3ae8/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab And Move"
    },
    {
        id:  603,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d5b520202ca52ea/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d5823781c2a3b58/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d5cbd4d1e116bdf/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Angled Side Step Jab Cross"
    },
    {
        id:  606,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d6925295b2e34fc/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d6643944f7f87e7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d6a8d26b27a987f/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross and Move Forward and Backwards"
    },
    {
        id:  607,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d81c245679e428a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d7c98a999672f8f/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d83e5c0bc3eb016/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross and Move with Pivot Hook and Basic Hook"
    },
    {
        id:  608,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d96df5ee9ddcd1e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d928aad58f1aff3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764d98a8b9ebcc6844/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross and Move with Pivot Left and Right Uppercuts"
    },
    {
        id:  609,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764da6611ff6c4fa9c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764da336be9627cbaa/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764da7b53704a8522b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross and Move with Pivot Left and Right"
    },
    {
        id:  604,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764db56931165d5a9f/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764db263ce4311d210/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764db6d276b0c62cda/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross and Move"
    },
    {
        id:  605,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764dd75522f2a2bfec/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764dcfba6cab84fd17/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764dd8bc0a4b6095cb/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross Left Hook and Move"
    },
    {
        id:  610,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764deb5bcd7142889a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764de669143e3d035e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764ded2a2b66c2e610/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross Left Hook Right Hook and Move"
    },
    {
        id:  611,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764df7003b5ef7a789/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764df340f3d2f40685/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764df8f385073afee8/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross Left Hook Right Hook"
    },
    {
        id:  612,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e14e4a99eba0384/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e0b4f35dbc0d9a2/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e16d4560f333acf/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross Left Hook"
    },
    {
        id:  613,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e44c533ee042b8d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e30bfd9e43a258c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e466763ebb6094d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab Cross"
    },
    {
        id:  614,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e818c2b8e944f92/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e531bf68bd49569/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e8672a437243843/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Jab"
    },
    {
        id:  615,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e94c17d8e5800b3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e90d55f88a79820/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e9637e0f7f36a71/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Stance Switch With Uppeprcut and Hook"
    },
    {
        id:  616,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764ea01de3f818af72/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764e9d6f2277048039/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764ea16da11e2e9177/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Stance Switch With Upeprcuts"
    },
    {
        id:  617,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764eacdb343da7149c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764eaa39da79655bae/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764eae4ce10f7e8b6b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Fran Sands",
        athletesSports:  "Boxing",
        title:  "Stance Switch"
    },
    {
        id:  618,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764ec13edd8bc8fa86/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764ebc243ad071d90e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69764ec2bb7fd4e80ee6/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Unknown Athlete",
        athletesSports:  "Boxing",
        title:  "Inside Slip Left Hook Counter"
    },
    {
        id:  619,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984908d921f17c21060/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984908a6a7da3c085b8/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984908eb966abdef8ea/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (1)"
    },
    {
        id:  620,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849093367788ee4619/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849091d9436f8800d7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984908eb966abdef8ea/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (10)"
    },
    {
        id:  621,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984909a3115c6e9a30d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849097e83a7acd6085/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984909b4d8895290194/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (11)"
    },
    {
        id:  622,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490a01a1442e6e159/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984909ea7f979189e76/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490a1422e402de1bd/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (12)"
    },
    {
        id:  623,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490a8cb84a646183a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490a68ec07264cf16/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490a9f3078a4c5a80/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (13)"
    },
    {
        id:  624,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490b05db06fa6b967/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490ae1d053eb911c9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490b17faa9da95020/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (14)"
    },
    {
        id:  625,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490b99a110b352bed/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490b747cee14cc2f9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490baacb94cbef9b5/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (15)"
    },
    {
        id:  626,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490c27944e40ad389/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490c038d779907491/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490c39f2e181c29de/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (16)"
    },
    {
        id:  627,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490cbb93d69d38e63/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490c96bbf95471573/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490ccd53288c10ac6/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (17)"
    },
    {
        id:  628,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490d10313c6cc76a9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490cfb7cfec88aae7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490ccd53288c10ac6/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (18)"
    },
    {
        id:  629,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490d78f52f156701c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490d5b125ce2263ba/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490d8cce0242f34a3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (19)"
    },
    {
        id:  630,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490e30cbbd4d17f2b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490e06b4038606de7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490e4306579a3d084/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (20)"
    },
    {
        id:  631,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490ec130ed7ab5450/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490e9b1ba2734eb98/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490ed33fdca8b1fa5/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (21)"
    },
    {
        id:  632,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490f3e3a7bbaf7cbc/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490f1a7ad0451c4a9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490ed33fdca8b1fa5/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (22)"
    },
    {
        id:  633,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490fd8cdd79985188/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490fb22c5a578b904/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698490feb475012cec44/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (23)"
    },
    {
        id:  634,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984910546324bd3099c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984910328b2e662e4e4/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491065679c1a0c885/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (24)"
    },
    {
        id:  635,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984910c77a8eb645de5/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984910a19245e7eb2b7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984910d97fe6dab5d2e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (25)"
    },
    {
        id:  636,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491171c821d1b79e1/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491141e7c8b5fc473/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984911856cc244fed96/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (26)"
    },
    {
        id:  637,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491202f572eb48937/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984911df417044b8f2c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984912193b299054d1b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (27)"
    },
    {
        id:  638,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849126ebc5d9497f36/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491251989d126c6df/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984912815951df5a145/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (28)"
    },
    {
        id:  639,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984912f5bbcac3f2419/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984912caab31298d7a9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491307904019678e3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (29)"
    },
    {
        id:  640,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984913661da74081809/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984913442e6b04cab81/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491307904019678e3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (3)"
    },
    {
        id:  641,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984913fef92989c147e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984913d6ce0e3cb3c88/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984914123317429937f/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (30)"
    },
    {
        id:  642,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491484f8e1d782d50/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984914630a0a49b6576/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491497a87ffccfd9a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (31)"
    },
    {
        id:  643,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491580d7134349844/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849153ac0afbb3ad72/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984915934410920095e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (32)"
    },
    {
        id:  644,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984915f065edab0baa0/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984915cc8b6beb1dd93/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984916027e96b78614d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (33)"
    },
    {
        id:  645,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984916659c6772d6c7e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849164d4a0ebc2b51c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491676df5646ec37d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (34)"
    },
    {
        id:  646,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984916e981e348e191e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984916c645a67337fa2/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984916fe6d5bcccf089/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (35)"
    },
    {
        id:  647,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849176d566f7cd93fd/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849174734a069b4152/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491780480e323e482/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (36)"
    },
    {
        id:  648,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984917ea94d38c60ad7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984917c9b50c23f9cc4/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984917fe156319ba62e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (37)"
    },
    {
        id:  649,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849185d3c26a49cd0e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491843cbc96a8486a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849186e999e8d0aa7d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (4)"
    },
    {
        id:  650,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984918bb664a0f7968e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984918a5f37b9e10137/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984918cd174e9b68cee/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (5)"
    },
    {
        id:  651,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491910ff6012ffb0a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984918fbb07ed397599/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984918cd174e9b68cee/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (6)"
    },
    {
        id:  652,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984919998774d4d7537/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984919747e4aea505e2/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984919aa3aa152d2fea/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (7)"
    },
    {
        id:  653,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984919ff024d50eea1f/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984919e700f4b440bb8/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491a11d937298dccf/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (8)"
    },
    {
        id:  654,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491a5b0e79b6ae6d6/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491a4525dc7730f11/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491a11d937298dccf/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  " (9)"
    },
    {
        id:  655,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491aa709e95098bfd/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491a92335e24ced12/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491a11d937298dccf/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Oleksandr Usyk",
        athletesSports:  "Boxing",
        title:  "Angled Reverse Crunch"
    },
    {
        id:  656,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491c3414eaa576389/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491be1f9869a4e4f5/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698491a11d937298dccf/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Sergei Raab",
        athletesSports:  "Boxing",
        title:  "Kettlebel Straight Punch Drill"
    },
    {
        id:  657,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984949b07fa04cd88dd/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69849493619acb0b9a67/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6984949c4b1dabaed890/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Unknown",
        athletesSports:  "Boxing",
        title:  "Angle Changes"
    },
    {
        id:  658,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698494b36c52654f046b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698494ad7d42b8d8f8f1/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/698494b499e1c1ed0bd6/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Unknown",
        athletesSports:  "Boxing",
        title:  "In and Out drill"
    },
    {
        id:  659,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990305cdcc4f4533c14/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990305e59dab8fb823a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Artur Beterbiev",
        athletesSports:  "Boxing",
        title:  "Wrist Exercise Lev1"
    },
    {
        id:  660,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990308ebde388a6eb31/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903086ce969a4888d3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030900d8dcd16e77a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Artur Beterbiev",
        athletesSports:  "Boxing",
        title:  "Wrist Exercise Lev2"
    },
    {
        id:  661,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030a765787e270f5f/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030a2c3581c8295fe/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030a9b13a0560179d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 2 3 Slip In 3 2"
    },
    {
        id:  662,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030c5a1a1df20e103/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030c069dc2bde718c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030c6ddb5ecc0a3a0/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 2 3"
    },
    {
        id:  663,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030ed7890672d9ba1/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030e6d07789e0a3a4/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699030eeb93992b3a381/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 2 5"
    },
    {
        id:  664,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903114322fa37d73ed/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990310e13f6edaa7ad4/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903115785cdc5320c0/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 2 Slip Out 2 1"
    },
    {
        id:  665,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031459161e33b8e62/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031471dd84187e002/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 3 5 3"
    },
    {
        id:  666,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031802031d5008b7c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031818c3f12609a5e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 3"
    },
    {
        id:  667,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031af30502ed3aa2b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031b0a3fb1e6b3348/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 6 3 Slip In 3"
    },
    {
        id:  668,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031c929e048c3c0bd/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031c44f650ba192c2/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031ca583b0af940e4/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 6 3"
    },
    {
        id:  669,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699031ffa354f23a0592/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032011a7375f2657d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 Klackalica 1 2 "
    },
    {
        id:  670,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903229766c6d9f0596/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990322215fc1174b9ce/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990322ac7b4238042f5/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 Klackalica 1 2 3 2"
    },
    {
        id:  671,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903250e6b597221665/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990324a5ad4a5b9d653/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032523d88f16f6eb3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 Klackalica 1 2 3"
    },
    {
        id:  672,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903271d21d2a81c982/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990326c128bf5cf9dae/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903273136f9c76d0a9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 Klackalica 1 2"
    },
    {
        id:  673,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903291082c6973f9ef/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990328b47fa1742aca9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032923e63546cbaf7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 Klackalica 2 3 2"
    },
    {
        id:  674,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032aa24fa1166abe8/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032a5909500648c4a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032ab70146130fa1b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 Klackalica 2 3"
    },
    {
        id:  675,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032da50cee06a22c1/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032dbafa5b5d3b758/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "1 Klackalica 2"
    },
    {
        id:  676,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032f791bf44b4aa39/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032f25901163fb4d3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699032f8da86e72a6db4/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Boxing Coordination Exercise 1"
    },
    {
        id:  677,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990332fb7bdb9be011a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699033255f8f243bb965/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990333155f384cc7dde/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Boxing Coordination Exercise 2"
    },
    {
        id:  678,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903362c8830e6d9d8e/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990335b05899a0c388b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990336438374d8c57d7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Boxing Coordination Exercise 3"
    },
    {
        id:  679,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903390df380f73b2a7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903386999153638199/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990339237e79035f9c2/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Boxing Coordination Exercise 4"
    },
    {
        id:  680,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699033b6563414b2dca2/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699033afe355e91ca773/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699033b79d0e17daa6d0/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Boxing Coordination Exercise 5"
    },
    {
        id:  681,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699033fd7b1f9643bf03/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699033ff1aeb25902f35/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Check Hook To Left"
    },
    {
        id:  682,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990341c999238e937b7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034176d05f51aa423/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990341dd762ffb83e2c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Check Hook to Right"
    },
    {
        id:  683,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903439b2e25ba3e9ad/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903434d9a416b21e96/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990343add5dc6b0f1c4/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Feet Battle"
    },
    {
        id:  684,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903455290cb3ea8d94/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903450499cbb013602/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034564f40f2dbdc68/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Footwork Exercise"
    },
    {
        id:  685,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903477e94c49495274/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034721bb435d4a771/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903479202009c2dde5/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Motoric exercise in pair 1"
    },
    {
        id:  686,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990348f58c3d26bc6e3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990348b51ca34c0da78/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034908ac9038f3eeb/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Movement exercise 1"
    },
    {
        id:  687,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034beec6e805c9938/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034b7ba88609d04ca/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034c03c6f7a3e0ac8/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Movement exercise 2"
    },
    {
        id:  688,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034e6e97b21d538d0/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034e01542086b55a8/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699034e87f2fd742cd29/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Presretanje 1 Slip In 1"
    },
    {
        id:  689,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990351071d53f97ce28/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990350a3a4ac27a3f27/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990351212e639333846/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Roll under and punches"
    },
    {
        id:  690,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903543dc5901d8208b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990353c925f02e51503/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990354578b384b2a6d1/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Rythm hooks"
    },
    {
        id:  691,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699035794c3de85759ac/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699035709749a3d93b13/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990357aee8f953a5807/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Rythm directs"
    },
    {
        id:  692,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699035b6365a1a2e1f11/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699035b7e6c321df951d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Rythmic directs"
    },
    {
        id:  693,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699035d605f71f4d4dee/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699035d049dbd228ca71/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699035d78a212c6405fa/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Scissor Directs"
    },
    {
        id:  694,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903605481915bde3e0/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699035fe656fc216099b/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990360730523d2bbf4c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Single leg slips"
    },
    {
        id:  695,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036165f8e74454ad6/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903613654ea0cfb4af/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903617c39d1e521880/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Skipping Directs"
    },
    {
        id:  696,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903647b7443eb5c0d2/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990364100c8bef19134/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036494d1d6b62fb8a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Tythm Uppercuts"
    },
    {
        id:  697,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990366a3cca64a621b8/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036640041ff619187/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990366bd4c9c83098ec/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Djordje Bujisic",
        athletesSports:  "Boxing",
        title:  "Warm up in pair"
    },
    {
        id:  698,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990369284494d21c256/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990368bd4a45100bbde/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990369429d5b4e7d9cd/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Islam Makachev",
        athletesSports:  "MMA",
        title:  "Wrist Exercise Lev2"
    },
    {
        id:  699,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036b226db14f334b2/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036ad1b06c00cafb2/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036b3858d981a0f2c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Terry Harper",
        athletesSports:  "Boxing",
        title:  "1 Klackalica 3"
    },
    {
        id:  700,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036c919fdda793e58/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036c324406f44cfd9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036ca87809619e83c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Terry Harper",
        athletesSports:  "Boxing",
        title:  "Burpee"
    },
    {
        id:  701,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036d44cf8538d78f6/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036d1ce861302de4a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036ca87809619e83c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Terry Harper",
        athletesSports:  "Boxing",
        title:  "Forward Lunges"
    },
    {
        id:  702,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036e0580b5c55929a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036ddc5cf7988b03c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036e1a4dba0ddb1ea/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Terry Harper",
        athletesSports:  "Boxing",
        title:  "Push Ups"
    },
    {
        id:  703,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036e9da24bcaf49c7/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036e80d78ef6ad89f/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036e1a4dba0ddb1ea/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Terry Harper",
        athletesSports:  "Boxing",
        title:  "Skipping Directs"
    },
    {
        id:  704,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036f61e06eb406963/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036f3c2c5bba3bf4c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699036f76fb73249e0ae/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Terry Harper",
        athletesSports:  "Boxing",
        title:  "Skips"
    },
    {
        id:  705,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903703a58d2b54fe0c/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69903700d9e9428cea70/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/6990370515a23233485a/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Terry Harper",
        athletesSports:  "Boxing",
        title:  "Warm Up Skips"
    },
        {
        id:  706,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9dfd8d806429e5f3/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9df830b0c53244cf/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9dfed342e8dce157/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Gervonta Davis",
        athletesSports:  "Boxing",
        title:  "Footwork Advanced"
    },
    {
        id:  707,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9e1e04a95eb29cd9/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9e17c675d05cc0c1/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9e1f53c74aed4994/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Gervonta Davis",
        athletesSports:  "Boxing",
        title:  "Footwork In and Out With Inside Slip"
    },
    {
        id:  708,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9e514416a175e782/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9e471e6885c2fb37/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9e52ca5266ec677d/view?project=68ff7ff10012988be55f\u0026mode=admin",
        athlete:  "Gervonta Davis",
        athletesSports:  "Boxing",
        title:  "Footwork Masterclass"
    },
    {
        id:  709,
        videoURL_360p:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9e65394ef652565f/view?project=68ff7ff10012988be55f\u0026mode=admin",
        videoURL:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9e5e1024f54987dc/view?project=68ff7ff10012988be55f\u0026mode=admin",
        poster:  "https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/699c9e669b68b2f021f4/view?project=68ff7ff10012988be55f\u0026mode=admin",
       athlete:  "Gervonta Davis",
        athletesSports:  "Boxing",
        title:  "Footwork Swith Hitting"
    },
  {
    id: 710,
    athlete: 'Xiong Zhengqi',
    title: 'Back Step Lead Hook',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa6a9eca125dc706/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa7112ada00ed2d9/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa721dd98fb8167c/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 711,
    athlete: 'Xiong Zhengqi',
    title: 'Single Punch Push Up for Back Advanced',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa7c363874cdf030/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa7f83d473f7915e/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa809dc6faa8a587/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 712,
    athlete: 'Xiong Zhengqi',
    title: 'Single Punch Push Up for Back Medium',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa868c0ebdec4c1f/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa89040551a0b9f3/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa8a67e56a187e16/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 713,
    athlete: 'Xiong Zhengqi',
    title: 'Slow To Power Straight Punch Drill',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa92c4dde8712e94/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa95c52d934fd289/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aa96d9385b209aa4/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 714,
    athlete: 'Xiong Zhengqi',
    title: 'Upper Body PushUps Hand to Fist',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aaa06141734de629/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aaa4295bc17e99a8/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aaa55b438309b5ea/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 715,
    athlete: 'Xiong Zhengqi',
    title: 'Upper Body PushUps on Fists',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aab0406479bc4cdd/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aab5197453a6c140/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aab649c7e2869d1b/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 716,
    athlete: 'Xiong Zhengqi',
    title: 'Upper Body PushUps on Hands',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aac32b2cdd7fc155/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aac68dcc3cb424a4/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aac7c0d259d7b26e/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 717,
    athlete: 'Xiong Zhengqi',
    title: 'Upper Body PushUps Scissor',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aad3a45cd27b23a2/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aad7539967573017/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a2aad895e356783f53/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 718,
    athlete: 'Oleksandr Usyk',
    title: '',
    athletesSports: '2 3 Slip 3 2',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54ae5e2835973ce61/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54aee5d2d2fa51336/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54af319d718b3c9e0/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 719,
    athlete: 'Oleksandr Usyk',
    title: '',
    athletesSports: '4 3 Slip 4 3',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b3a443049944452/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b400abbe619438f/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b41847d1a939e37/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 720,
    athlete: 'Oleksandr Usyk',
    title: '1 Klackalica 2',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b513314475ff214/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b55a42fe1568564/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b56d94fa0606048/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 721,
    athlete: 'Oleksandr Usyk',
    title: 'Directs',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b7c82d75fa7feb2/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b83a150bd3040b9/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b85129a42d64caa/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 722,
    athlete: 'Oleksandr Usyk',
    title: 'Hooks',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b969c6d0553f939/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b9e0d9f257d7e45/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54b9f3be0fe638f17/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 723,
    athlete: 'Oleksandr Usyk',
    title: 'Long  Uppercuts',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54bc5600ca24f8823/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54bcf226235e2a16c/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54bd0acf59972ce0b/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 724,
    athlete: 'Oleksandr Usyk',
    title: 'Only Lead Hand Drill',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54c0e3968bf7cd163/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54c103ca3b2399c2e/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 725,
    athlete: 'Oleksandr Usyk',
    title: 'Only Rear Hand Drill',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54c3cabdd56176bfa/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54c3f7be2a8bcdc7b/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 726,
    athlete: 'Oleksandr Usyk',
    title: 'Shadow Boxing Both Hands',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54c89399643b612c6/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54c8ac5f603655c05/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 727,
    athlete: 'Oleksandr Usyk',
    title: 'Uppercut Drill',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54cdebae76f12e2d1/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54ce05d5822dbd13d/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 728,
    athlete: 'Oleksandr Usyk',
    title: 'Uppercuts',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54ceeeae2605970a8/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54cf289ef795f5055/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54cf3cfc554f61e37/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 729,
    athlete: 'Terence Crawford',
    title: 'Slip Roll Pivot Hook Drill',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d0208b51311d1cf/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d05ebf3e10ce050/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d0734ee3f034408/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 730,
    athlete: 'Unknown',
    title: 'Barbell Directs',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d3dcc23bf1070b2/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d472cc3e7078f44/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d488f9473a306ce/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 731,
    athlete: 'Unknown',
    title: 'Barbell Uppercuts to the body',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d7a8516df43993a/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d82ab92823bbbf6/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d83e9367db79e18/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 732,
    athlete: 'Unknown',
    title: 'Barbell Uppercuts to the head',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d9687b0c373d980/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d9a4510abeee67a/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54d9b88aa7da3bd5e/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 733,
    athlete: 'Unknown',
    title: 'Jumps on plate',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54daf96288522d0fb/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54db4a758683fa756/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54db61364a8b25b64/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 734,
    athlete: 'Unknown',
    title: 'Kettlbell semi-squat and jump',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54dd79003bfdd4263/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54ddd2c97734d4da4/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54dde827b181bc332/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 735,
    athlete: 'Unknown',
    title: 'Lateral jumps on plate',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54dfbc8b1efb5154b/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54e010ffcc080cd43/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54e02aa3183c25c9d/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 736,
    athlete: 'Unknown',
    title: 'Plate Shadow Boxing',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/ /view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54e3e47149ae7e2a6/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54e3fd30d7a62b419/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 737,
    athlete: 'Unknown',
    title: 'Repetitive Lead Hooks',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54e43bc1a6aaf9979/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54e45b22df8bfc555/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a54e46c99f169473a9/view?project=68ff7ff10012988be55f&mode=admin'
  },
   {
    id: 738,
    athlete: 'Guillermo Rigondeaux',
    title: '2 5 1 6 ',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a5542ff2277269c17a/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a5543435e750ad0591/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554356637d62bee3f/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 739,
    athlete: 'Guillermo Rigondeaux',
    title: 'Lead Hand Free Rear hand Dumbell Dirrect',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a55445e6ef2ad040cb/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a5544a43dc3ff05e16/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a5544b6f63085985ad/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 740,
    athlete: 'Guillermo Rigondeaux',
    title: '',
    athletesSports: 'Lead Hand Free Rear hand Dumbell Uppercut',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a5545c0e9a87578805/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a55460a6b904e58aa3/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a55461e00bc37dbdb9/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 741,
    athlete: 'Unknown',
    title: '1 2 5 2 1 6',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554748ee12b2cd58f/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554790e68732a9437/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a5547a252adc3f1a27/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 742,
    athlete: 'Viktor Pyshkin',
    title: '20kg barbell Rotations',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554a1ecaddaf0bafb/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554a9eff670c63492/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554ab60630e992b1c/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 743,
    athlete: 'Viktor Pyshkin',
    title: 'Cross 2kg Drill',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554c836c0f60d99e6/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554cdd41ffbb3b944/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554cf20e6f3e96a4d/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 744,
    athlete: 'Viktor Pyshkin',
    title: 'Directs 2kg Drill',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554eb12413b6019c6/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554f2b6e886f18638/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a554f4075026505e27/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 745,
    athlete: 'Viktor Pyshkin',
    title: 'Plate Defense',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a5550cdbecb94a5c0b/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a55511af6c888938b9/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a55512e8af07de96fe/view?project=68ff7ff10012988be55f&mode=admin'
  },
  {
    id: 746,
    athlete: 'Viktor Pyshkin',
    title: 'Tennis Ball Shadow Boxing',
    athletesSports: 'Boxing',
    videoURL: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a55543750647d3258d/view?project=68ff7ff10012988be55f&mode=admin',
    videoURL_360p: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a555520c02d559f791/view?project=68ff7ff10012988be55f&mode=admin',
    poster: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68ff80060018afe779ae/files/69a555537e0d33f2d243/view?project=68ff7ff10012988be55f&mode=admin'
  }




]



export default exercises;


