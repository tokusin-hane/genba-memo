const TERMS = {

  /* ══════════════════════════════════
     共通
  ══════════════════════════════════ */

  "安全・緊急": { color:"#ef4444", emoji:"🔴", group:"共通", items:[
    {ja:"危険",yomi:"きけん",vi:"Nguy hiểm",vi_k:"グイ・ヒエム",id:"Bahaya",id_k:"バハヤ",en:"Danger",en_k:"デンジャー",bn:"বিপদ",bn_k:"ビポッド"},
    {ja:"注意",yomi:"ちゅうい",vi:"Cẩn thận",vi_k:"カン・タン",id:"Hati-hati",id_k:"ハティ・ハティ",en:"Caution",en_k:"コーション",bn:"সতর্কতা",bn_k:"シャトルコタ"},
    {ja:"緊急停止",yomi:"きんきゅうていし",vi:"Dừng khẩn cấp",vi_k:"ズン・カン・カップ",id:"Henti darurat",id_k:"ヘンティ・ダルラット",en:"Emergency stop",en_k:"エマージェンシー・ストップ",bn:"জরুরি থামুন",bn_k:"ジョルリ・タムン"},
    {ja:"火事",yomi:"かじ",vi:"Cháy",vi_k:"チャイ",id:"Kebakaran",id_k:"クバカラン",en:"Fire",en_k:"ファイアー",bn:"আগুন",bn_k:"アグン"},
    {ja:"逃げてください",yomi:"にげてください",vi:"Hãy chạy trốn",vi_k:"ハイ・チャイ・チョン",id:"Tolong lari",id_k:"トロン・ラリ",en:"Please evacuate",en_k:"プリーズ・エバキュエイト",bn:"পালান",bn_k:"パラン"},
    {ja:"助けてください",yomi:"たすけてください",vi:"Xin hãy giúp tôi",vi_k:"シン・ハイ・ジュップ・トイ",id:"Tolong bantu saya",id_k:"トロン・バントゥ・サヤ",en:"Please help me",en_k:"プリーズ・ヘルプ・ミー",bn:"আমাকে সাহায্য করুন",bn_k:"アマケ・シャハッジョ・コルン"},
    {ja:"怪我をしました",yomi:"けがをしました",vi:"Tôi bị thương",vi_k:"トイ・ビ・トゥオン",id:"Saya terluka",id_k:"サヤ・テルルカ",en:"I am injured",en_k:"アイ・アム・インジャード",bn:"আমি আহত হয়েছি",bn_k:"アミ・アホト"},
    {ja:"救急車",yomi:"きゅうきゅうしゃ",vi:"Xe cấp cứu",vi_k:"セー・カップ・クウ",id:"Ambulans",id_k:"アンブランス",en:"Ambulance",en_k:"アンビュランス",bn:"অ্যাম্বুলেন্স",bn_k:"アンブレンス"},
    {ja:"消火器",yomi:"しょうかき",vi:"Bình chữa cháy",vi_k:"ビン・チュア・チャイ",id:"Alat pemadam api",id_k:"アラット・プマダム・アピ",en:"Fire extinguisher",en_k:"ファイアー・イクスティングイッシャー",bn:"অগ্নিনির্বাপক",bn_k:"オグニニルバポク"},
    {ja:"ヘルメット",yomi:"へるめっと",vi:"Mũ bảo hộ",vi_k:"ムー・バオ・ホー",id:"Helm",id_k:"ヘルム",en:"Helmet",en_k:"ヘルメット",bn:"হেলমেট",bn_k:"ヘルメット"},
    {ja:"手袋",yomi:"てぶくろ",vi:"Găng tay",vi_k:"ガン・タイ",id:"Sarung tangan",id_k:"サルン・タンガン",en:"Gloves",en_k:"グローブス",bn:"হাতমোজা",bn_k:"ハットモジャ"},
    {ja:"安全靴",yomi:"あんぜんぐつ",vi:"Giày bảo hộ",vi_k:"ジャイ・バオ・ホー",id:"Sepatu safety",id_k:"スパトゥ・セーフティ",en:"Safety shoes",en_k:"セーフティ・シューズ",bn:"সেফটি জুতা",bn_k:"セフティ・ジュタ"},
    {ja:"立入禁止",yomi:"たちいりきんし",vi:"Cấm vào",vi_k:"カム・バオ",id:"Dilarang masuk",id_k:"ディララン・マスック",en:"No entry",en_k:"ノー・エントリー",bn:"প্রবেশ নিষিদ্ধ",bn_k:"プロベシュ・ニシッド"},
    {ja:"触れないでください",yomi:"ふれないでください",vi:"Đừng chạm vào",vi_k:"ドゥン・チャム・バオ",id:"Jangan disentuh",id_k:"ジャンガン・ディセントゥ",en:"Do not touch",en_k:"ドゥ・ノット・タッチ",bn:"স্পর্শ করবেন না",bn_k:"スポルシュ・コルベン・ナ"},
    {ja:"電気",yomi:"でんき",vi:"Điện",vi_k:"ディエン",id:"Listrik",id_k:"リストリック",en:"Electricity",en_k:"エレクトリシティ",bn:"বিদ্যুৎ",bn_k:"ビドゥット"},
    {ja:"保護メガネ",yomi:"ほごめがね",vi:"Kính bảo hộ",vi_k:"キン・バオ・ホー",id:"Kacamata pelindung",id_k:"カチャマタ・プリンドゥン",en:"Safety goggles",en_k:"セーフティ・ゴーグルス",bn:"সেফটি চশমা",bn_k:"セフティ・チョシュマ"},
    {ja:"マスク",yomi:"ますく",vi:"Khẩu trang",vi_k:"カウ・チャン",id:"Masker",id_k:"マスカー",en:"Mask",en_k:"マスク",bn:"মাস্ক",bn_k:"マスク"}
  ]},

  "作業指示": { color:"#f59e0b", emoji:"🟡", group:"共通", items:[
    {ja:"始めてください",yomi:"はじめてください",vi:"Hãy bắt đầu",vi_k:"ハイ・バット・ダウ",id:"Silakan mulai",id_k:"シラカン・ムライ",en:"Please start",en_k:"プリーズ・スタート",bn:"শুরু করুন",bn_k:"シュル・コルン"},
    {ja:"止めてください",yomi:"とめてください",vi:"Hãy dừng lại",vi_k:"ハイ・ズン・ライ",id:"Tolong hentikan",id_k:"トロン・ヘンティカン",en:"Please stop",en_k:"プリーズ・ストップ",bn:"থামুন",bn_k:"タムン"},
    {ja:"もう一度",yomi:"もういちど",vi:"Một lần nữa",vi_k:"モット・ラン・ヌア",id:"Sekali lagi",id_k:"スカリ・ラギ",en:"One more time",en_k:"ワン・モア・タイム",bn:"আরেকবার",bn_k:"アレクバル"},
    {ja:"ゆっくり",yomi:"ゆっくり",vi:"Chậm thôi",vi_k:"チャム・トイ",id:"Pelan-pelan",id_k:"プラン・プラン",en:"Slowly",en_k:"スローリー",bn:"ধীরে",bn_k:"ディレ"},
    {ja:"速く",yomi:"はやく",vi:"Nhanh lên",vi_k:"ニャン・レン",id:"Lebih cepat",id_k:"ルビ・チュパット",en:"Faster",en_k:"ファスター",bn:"দ্রুত",bn_k:"ドルット"},
    {ja:"わかりましたか？",yomi:"わかりましたか",vi:"Bạn hiểu chưa?",vi_k:"バン・ヒウ・チュア",id:"Apakah mengerti?",id_k:"アパカー・ムンゲルティ",en:"Do you understand?",en_k:"ドゥ・ユー・アンダスタンド",bn:"বুঝেছেন?",bn_k:"ブジェチェン"},
    {ja:"わかりました",yomi:"わかりました",vi:"Tôi hiểu rồi",vi_k:"トイ・ヒウ・ロイ",id:"Saya mengerti",id_k:"サヤ・ムンゲルティ",en:"I understand",en_k:"アイ・アンダスタンド",bn:"বুঝেছি",bn_k:"ブジェチ"},
    {ja:"わかりません",yomi:"わかりません",vi:"Tôi không hiểu",vi_k:"トイ・コン・ヒウ",id:"Saya tidak mengerti",id_k:"サヤ・ティダック・ムンゲルティ",en:"I don't understand",en_k:"アイ・ドント・アンダスタンド",bn:"বুঝিনি",bn_k:"ブジニ"},
    {ja:"見てください",yomi:"みてください",vi:"Hãy nhìn vào đây",vi_k:"ハイ・ニン・バオ・ダイ",id:"Tolong lihat",id_k:"トロン・リハット",en:"Please watch",en_k:"プリーズ・ウォッチ",bn:"দেখুন",bn_k:"デクン"},
    {ja:"確認してください",yomi:"かくにんしてください",vi:"Hãy kiểm tra",vi_k:"ハイ・キエム・チャ",id:"Tolong periksa",id_k:"トロン・プリクサ",en:"Please check",en_k:"プリーズ・チェック",bn:"চেক করুন",bn_k:"チェック・コルン"},
    {ja:"手伝ってください",yomi:"てつだってください",vi:"Hãy giúp tôi",vi_k:"ハイ・ジュップ・トイ",id:"Tolong bantu",id_k:"トロン・バントゥ",en:"Please help",en_k:"プリーズ・ヘルプ",bn:"সাহায্য করুন",bn_k:"シャハッジョ・コルン"},
    {ja:"運んでください",yomi:"はこんでください",vi:"Hãy mang đi",vi_k:"ハイ・マン・ディ",id:"Tolong bawa",id_k:"トロン・バワ",en:"Please carry",en_k:"プリーズ・キャリー",bn:"নিয়ে যান",bn_k:"ニエ・ジャン"},
    {ja:"並べてください",yomi:"ならべてください",vi:"Hãy sắp xếp",vi_k:"ハイ・サップ・セップ",id:"Tolong susun",id_k:"トロン・ススン",en:"Please line up",en_k:"プリーズ・ライン・アップ",bn:"সাজান",bn_k:"シャジャン"},
    {ja:"気をつけてください",yomi:"きをつけてください",vi:"Hãy cẩn thận",vi_k:"ハイ・カン・タン",id:"Tolong berhati-hati",id_k:"トロン・ブルハティ・ハティ",en:"Please be careful",en_k:"プリーズ・ビー・ケアフル",bn:"সাবধান থাকুন",bn_k:"シャブダン・タクン"},
    {ja:"交代",yomi:"こうたい",vi:"Thay ca",vi_k:"タイ・カ",id:"Ganti shift",id_k:"ガンティ・シフト",en:"Shift change",en_k:"シフト・チェンジ",bn:"শিফট পরিবর্তন",bn_k:"シフト・ポリボルトン"}
  ]},

  "作業動作": { color:"#f97316", emoji:"🤲", group:"共通", items:[
    {ja:"押す",yomi:"おす",vi:"Đẩy",vi_k:"ダイ",id:"Dorong",id_k:"ドロン",en:"Push",en_k:"プッシュ",bn:"ঠেলুন",bn_k:"テルン"},
    {ja:"引く",yomi:"ひく",vi:"Kéo",vi_k:"ケオ",id:"Tarik",id_k:"タリック",en:"Pull",en_k:"プル",bn:"টানুন",bn_k:"タヌン"},
    {ja:"持つ",yomi:"もつ",vi:"Cầm",vi_k:"カム",id:"Pegang",id_k:"プガン",en:"Hold",en_k:"ホールド",bn:"ধরুন",bn_k:"ドルン"},
    {ja:"置く",yomi:"おく",vi:"Đặt",vi_k:"ダット",id:"Letakkan",id_k:"ルタッカン",en:"Place",en_k:"プレイス",bn:"রাখুন",bn_k:"ラクン"},
    {ja:"持ち上げる",yomi:"もちあげる",vi:"Nâng lên",vi_k:"ナン・レン",id:"Angkat",id_k:"アンカット",en:"Lift",en_k:"リフト",bn:"তুলুন",bn_k:"トゥルン"},
    {ja:"下ろす",yomi:"おろす",vi:"Hạ xuống",vi_k:"ハー・スオン",id:"Turunkan",id_k:"トゥルンカン",en:"Lower",en_k:"ロワー",bn:"নামান",bn_k:"ナマン"},
    {ja:"締ぁる",yomi:"しめる",vi:"Siết chặt",vi_k:"シエット・チャット",id:"Kencangkan",id_k:"ケンチャンカン",en:"Tighten",en_k:"タイトン",bn:"শক্ত করুন",bn_k:"シャクト・コルン"},
    {ja:"緩ぁる",yomi:"ゆるめる",vi:"Nới lỏng",vi_k:"ノイ・ロン",id:"Kendurkan",id_k:"ケンドゥルカン",en:"Loosen",en_k:"ルーズン",bn:"ঢিলা করুন",bn_k:"ディラ・コルン"},
    {ja:"切る",yomi:"きる",vi:"Cắt",vi_k:"カット",id:"Potong",id_k:"ポトン",en:"Cut",en_k:"カット",bn:"কাটুন",bn_k:"カトゥン"},
    {ja:"つける",yomi:"つける",vi:"Bật",vi_k:"バット",id:"Nyalakan",id_k:"ニャラカン",en:"Turn on",en_k:"ターン・オン",bn:"চালু করুন",bn_k:"チャル・コルン"},
    {ja:"消す",yomi:"けす",vi:"Tắt",vi_k:"タット",id:"Matikan",id_k:"マティカン",en:"Turn off",en_k:"ターン・オフ",bn:"বন্ধ করুন",bn_k:"ボンド・コルン"},
    {ja:"取り付ける",yomi:"とりつける",vi:"Lắp đặt",vi_k:"ラップ・ダット",id:"Pasang",id_k:"パサン",en:"Attach",en_k:"アタッチ",bn:"লাগান",bn_k:"ラガン"},
    {ja:"取り外す",yomi:"とりはずす",vi:"Tháo ra",vi_k:"タオ・ラ",id:"Lepaskan",id_k:"ルパスカン",en:"Remove",en_k:"リムーブ",bn:"খুলুন",bn_k:"クルン"},
    {ja:"回す",yomi:"まわす",vi:"Xoay",vi_k:"ソアイ",id:"Putar",id_k:"プタル",en:"Rotate",en_k:"ローテート",bn:"ঘোরান",bn_k:"ゴラン"},
    {ja:"入れる",yomi:"いれる",vi:"Cho v ao",vi_k:"チョ・バオ",id:"Masukkan",id_k:"マスッカン",en:"Insert",en_k:"インサート",bn:"ঢোকান",bn_k:"ドカン"}
  ]},

  "品質・検査": { color:"#10b981", emoji:"🟢", group:"共通", items:[
    {ja:"OK",yomi:"おーけー",vi:"Được",vi_k:"ドゥオック",id:"Oke",id_k:"オーケー",en:"OK",en_k:"オーケー",bn:"ঠিক আছে",bn_k:"ティック・アチェ"},
    {ja:"NG（不合格）",yomi:"えぬじー",vi:"Không đạt",vi_k:"コン・ダット",id:"Tidak lulus",id_k:"ティダック・ルルス",en:"Not good / Reject",en_k:"ノット・グッド",bn:"ব্যর্থ",bn_k:"ビャルト"},
    {ja:"不良品",yomi:"ふりょうひん",vi:"Hàng lỗi",vi_k:"ハン・ロイ",id:"Produk cacat",id_k:"プロドゥック・チャチャット",en:"Defective product",en_k:"ディフェクティブ・プロダクト",bn:"ত্রুটিপূর্ণ পণ্য",bn_k:"トルティプルノ・ポノ"},
    {ja:"傷",yomi:"きず",vi:"Vết trầy",vi_k:"ベット・チャイ",id:"Goresan",id_k:"ゴルサン",en:"Scratch",en_k:"スクラッチ",bn:"আঁচড়",bn_k:"アンチョル"},
    {ja:"汚れ",yomi:"よごれ",vi:"Vết bẩn",vi_k:"ベット・バン",id:"Kotoran",id_k:"コトラン",en:"Dirt / Stain",en_k:"ダート",bn:"ময়লা",bn_k:"モイラ"},
    {ja:"やり直し",yomi:"やりなおし",vi:"Làm lại",vi_k:"ラム・ライ",id:"Kerjakan ulang",id_k:"クルジャカン・ウラン",en:"Redo",en_k:"リドゥ",bn:"আবার করুন",bn_k:"アバール・コルン"},
    {ja:"検査",yomi:"けんさ",vi:"Kiểm tra",vi_k:"キエム・チャ",id:"Inspeksi",id_k:"インスペクシ",en:"Inspection",en_k:"インスペクション",bn:"পরিদর্শন",bn_k:"ポリドルション"},
    {ja:"数を数えてください",yomi:"かずをかぞえてください",vi:"Hãy đếm số lượng",vi_k:"ハイ・デム・ソー・ルオン",id:"Tolong hitung jumlahnya",id_k:"トロン・ヒトゥン",en:"Please count",en_k:"プリーズ・カウント",bn:"গণনা করুন",bn_k:"ゴノナ・コルン"},
    {ja:"足りない",yomi:"たりない",vi:"Không đủ",vi_k:"コン・ドゥー",id:"Kurang",id_k:"クラン",en:"Not enough",en_k:"ノット・イナフ",bn:"পর্যাপ্ত নয়",bn_k:"ポルジャプト・ノイ"},
    {ja:"別にしてください",yomi:"べつにしてください",vi:"Hãy để riêng ra",vi_k:"ハイ・デ・リエン・ラ",id:"Tolong pisahkan",id_k:"トロン・ピサーカン",en:"Please separate",en_k:"プリーズ・セパレート",bn:"আলাদা করুন",bn_k:"アラダ・コルン"},
    {ja:"合格品",yomi:"ごうかくひん",vi:"Sản phẩm đạt",vi_k:"サン・ファム・ダット",id:"Produk lulus",id_k:"プロドゥック・ルルス",en:"Passed product",en_k:"パスト・プロダクト",bn:"পাস পণ্য",bn_k:"パス・ポノ"},
    {ja:"サンプル",yomi:"さんぷる",vi:"Mẫu",vi_k:"マウ",id:"Sampel",id_k:"サンプル",en:"Sample",en_k:"サンプル",bn:"নমুনা",bn_k:"ノムナ"}
  ]},

  "測定・位置": { color:"#6366f1", emoji:"📏", group:"共通", items:[
    {ja:"右",yomi:"みぎ",vi:"Phải",vi_k:"ファイ",id:"Kanan",id_k:"カナン",en:"Right",en_k:"ライト",bn:"ডান",bn_k:"ダン"},
    {ja:"左",yomi:"ひだり",vi:"Trái",vi_k:"チャイ",id:"Kiri",id_k:"キリ",en:"Left",en_k:"レフト",bn:"বাম",bn_k:"バム"},
    {ja:"上",yomi:"うえ",vi:"Trên",vi_k:"チェン",id:"Atas",id_k:"アタス",en:"Up / Above",en_k:"アップ",bn:"উপরে",bn_k:"ウポレ"},
    {ja:"下",yomi:"した",vi:"Dưới",vi_k:"ズオイ",id:"Bawah",id_k:"バワ",en:"Down / Below",en_k:"ダウン",bn:"নিচে",bn_k:"ニチェ"},
    {ja:"前",yomi:"まえ",vi:"Phía trước",vi_k:"フィア・チュオック",id:"Depan",id_k:"デパン",en:"Front",en_k:"フロント",bn:"সামনে",bn_k:"シャムネ"},
    {ja:"後ろ",yomi:"うしろ",vi:"Phía sau",vi_k:"フィア・サウ",id:"Belakang",id_k:"ブラカン",en:"Back / Behind",en_k:"バック",bn:"পিছনে",bn_k:"ピチネ"},
    {ja:"ミリ",yomi:"みり",vi:"Milimet",vi_k:"ミリメット",id:"Milimeter",id_k:"ミリメーター",en:"Millimeter",en_k:"ミリメーター",bn:"মিলিমিটার",bn_k:"ミリメーター"},
    {ja:"センチ",yomi:"せんち",vi:"Centimét",vi_k:"センチメット",id:"Centimeter",id_k:"センチメーター",en:"Centimeter",en_k:"センチメーター",bn:"সেন্টিমিটার",bn_k:"センチメーター"},
    {ja:"メートル",yomi:"ぁーとる",vi:"Mét",vi_k:"メット",id:"Meter",id_k:"メーター",en:"Meter",en_k:"メーター",bn:"মিটার",bn_k:"メーター"},
    {ja:"キロ",yomi:"きろ",vi:"Kilo",vi_k:"キロ",id:"Kilo",id_k:"キロ",en:"Kilogram",en_k:"キログラム",bn:"কিলো",bn_k:"キロ"},
    {ja:"厚み",yomi:"あつみ",vi:"Độ dày",vi_k:"ドー・ザイ",id:"Ketebalan",id_k:"クトゥバラン",en:"Thickness",en_k:"シックネス",bn:"পুরুত্ব",bn_k:"プルット"},
    {ja:"幅",yomi:"はば",vi:"Chiều rộng",vi_k:"チウ・ロン",id:"Lebar",id_k:"ルバル",en:"Width",en_k:"ウィドス",bn:"প্রস্থ",bn_k:"プロスト"},
    {ja:"長さ",yomi:"ながさ",vi:"Chiều dài",vi_k:"チウ・ザイ",id:"Panjang",id_k:"パンジャン",en:"Length",en_k:"レングス",bn:"দৈর্ঘ্য",bn_k:"ダイルゴ"}
  ]},

  "設備・機械": { color:"#0891b2", emoji:"⚙️", group:"共通", items:[
    {ja:"機械",yomi:"きかい",vi:"Máy móc",vi_k:"マイ・モック",id:"Mesin",id_k:"ムシン",en:"Machine",en_k:"マシーン",bn:"যন্ত্র",bn_k:"ジョントロ"},
    {ja:"スイッチ",yomi:"すいっち",vi:"Công tắc",vi_k:"コン・タック",id:"Saklar",id_k:"サクラル",en:"Switch",en_k:"スイッチ",bn:"সুইচ",bn_k:"スイッチ"},
    {ja:"ボタン",yomi:"ぼたん",vi:"Nút",vi_k:"ヌット",id:"Tombol",id_k:"トンボル",en:"Button",en_k:"ボタン",bn:"বোতাম",bn_k:"ボタム"},
    {ja:"センサー",yomi:"せんさー",vi:"Cảm biến",vi_k:"カム・ビエン",id:"Sensor",id_k:"センサー",en:"Sensor",en_k:"センサー",bn:"সেন্সর",bn_k:"センサー"},
    {ja:"モーター",yomi:"もーたー",vi:"Động cơ",vi_k:"ドン・コ",id:"Motor",id_k:"モトル",en:"Motor",en_k:"モーター",bn:"মোটর",bn_k:"モーター"},
    {ja:"ベルト",yomi:"べると",vi:"Dây curoa",vi_k:"ザイ・クロア",id:"Belt",id_k:"ベルト",en:"Belt",en_k:"ベルト",bn:"বেল্ট",bn_k:"ベルト"},
    {ja:"コンベア",yomi:"こんべあ",vi:"Băng chuyền",vi_k:"バン・チュエン",id:"Konveyor",id_k:"コンベヤー",en:"Conveyor",en_k:"コンベヤー",bn:"কনভেয়ার",bn_k:"コンベヤー"},
    {ja:"故障",yomi:"こしょう",vi:"H���ng hóc",vi_k:"ホン・ホック",id:"Rusak",id_k:"ルサック",en:"Breakdown",en_k:"ブレイクダウン",bn:"নষ্ট",bn_k:"ノシュト"},
    {ja:"修理",yomi:"しゅうり",vi:"Sửa chữa",vi_k:"スア・チュア",id:"Perbaikan",id_k:"プルバイカン",en:"Repair",en_k:"リペア",bn:"মেরামত",bn_k:"メラマット"},
    {ja:"電源",yomi:"でんげん",vi:"Nguồn điện",vi_k:"ンゲン・ディエン",id:"Sumber listrik",id_k:"スンブル・リストリック",en:"Power source",en_k:"パワー・ソース",bn:"বিদ্যুৎ উৎস",bn_k:"ビドゥット"},
    {ja:"異常",yomi:"いじょう",vi:"Bất thường",vi_k:"バット・トゥオン",id:"Tidak normal",id_k:"ティダック・ノルマル",en:"Abnormal",en_k:"アブノーマル",bn:"অস্বাভাবিক",bn_k:"アシュワバビック"},
    {ja:"振動",yomi:"しんどう",vi:"Rung động",vi_k:"ルン・ドン",id:"Getaran",id_k:"ゲタラン",en:"Vibration",en_k:"バイブレーション",bn:"কম্পন",bn_k:"コンポン"}
  ]},

  "職場ルール": { color:"#7c3aed", emoji:"👔", group:"共通", items:[
    {ja:"出勤",yomi:"しゅっきん",vi:"Đi làm",vi_k:"ディ・ラム",id:"Masuk kerja",id_k:"マスック・クルジャ",en:"Go to work",en_k:"ゴー・トゥ・ワーク",bn:"কাজে আসুন",bn_k:"カジェ・アシュン"},
    {ja:"遅刻",yomi:"ちこく",vi:"Đi trễ",vi_k:"ディ・チェ",id:"Terlambat",id_k:"テルランバット",en:"Late",en_k:"レイト",bn:"দেরি",bn_k:"デリ"},
    {ja:"欠勤",yomi:"けっきん",vi:"Vắng mặt",vi_k:"バン・マット",id:"Absen",id_k:"アブセン",en:"Absent",en_k:"アブセント",bn:"অনুপস্থিত",bn_k:"オヌポストット"},
    {ja:"残業",yomi:"ざんぎょう",vi:"Tăng ca",vi_k:"タン・カ",id:"Lembur",id_k:"ルンブル",en:"Overtime",en_k:"オーバータイム",bn:"ওভারটাইম",bn_k:"オーバータイム"},
    {ja:"休日",yomi:"きゅうじつ",vi:"Ngày nghỉ",vi_k:"ンガイ・ンギー",id:"Hari libur",id_k:"ハリ・リブル",en:"Day off",en_k:"デイ・オフ",bn:"ছুটির দিন",bn_k:"チュティル・ディン"},
    {ja:"制服",yomi:"せいふく",vi:"Đồng phục",vi_k:"ドン・フック",id:"Seragam",id_k:"スラガム",en:"Uniform",en_k:"ユニフォーム",bn:"ইউনিফর্ম",bn_k:"ユニフォーム"},
    {ja:"ロッカー",yomi:"ろっかー",vi:"Tủ khóa",vi_k:"トゥ・コア",id:"Loker",id_k:"ロカー",en:"Locker",en_k:"ロッカー",bn:"লকার",bn_k:"ロッカー"},
    {ja:"タイムカード",yomi:"たいむかーど",vi:"Thẻ chấm công",vi_k:"テ・チャム・コン",id:"Kartu absen",id_k:"カルトゥ・アブセン",en:"Time card",en_k:"タイム・カード",bn:"টাইম কার্ড",bn_k:"タイム・カード"},
    {ja:"報告",yomi:"ほうこく",vi:"Báo cáo",vi_k:"バオ・カオ",id:"Laporan",id_k:"ラポラン",en:"Report",en_k:"リポート",bn:"রিপোর্ট",bn_k:"リポート"},
    {ja:"連絡",yomi:"れんらく",vi:"Liên lạc",vi_k:"リエン・ラック",id:"Kontak",id_k:"コンタック",en:"Contact",en_k:"コンタクト",bn:"যোগাযোগ",bn_k:"ヨガヨゴ"},
    {ja:"相談",yomi:"そうだん",vi:"Tham khảo",vi_k:"タム・コー",id:"Konsultasi",id_k:"コンスルタシ",en:"Consult",en_k:"コンサルト",bn:"পরামর্শ",bn_k:"ポラモルシュ"}
  ]},

  "5S・整理整頓": { color:"#ec4899", emoji:"✨", group:"共通", items:[
    {ja:"整理",yomi:"せいり",vi:"Sàng lọc",vi_k:"サン・ロック",id:"Pemilahan",id_k:"プミラハン",en:"Sort",en_k:"ソート",bn:"বাছাই",bn_k:"バチャイ"},
    {ja:"整頓",yomi:"せいとん",vi:"Sắp xếp",vi_k:"サップ・セップ",id:"Penataan",id_k:"プナタアン",en:"Set in order",en_k:"セット・イン・オーダー",bn:"গোছানো",bn_k:"ゴチャノ"},
    {ja:"清掃",yomi:"せいそう",vi:"Vệ sinh",vi_k:"ベ・シン",id:"Pembersihan",id_k:"プンブルシハン",en:"Clean",en_k:"クリーン",bn:"পরিষ্কার",bn_k:"ポリシュカール"},
    {ja:"元の場所に戻してください",yomi:"もとのばしょにもどしてください",vi:"Hãy đặt lại chỗ cũ",vi_k:"ハイ・ダット・ライ",id:"Tolong kembalikan",id_k:"トロン・クンバリカン",en:"Please put it back",en_k:"プリーズ・プット・イット・バック",bn:"আগের জায়গায় রাখুন",bn_k:"アゲル・���ャイガイ・ラクン"},
    {ja:"掃除してください",yomi:"そうじしてください",vi:"Hãy quét dọn",vi_k:"ハイ・クエット・ドン",id:"Tolong bersihkan",id_k:"トロン・ブルシーカン",en:"Please clean up",en_k:"プリーズ・クリーン・アップ",bn:"পরিষ্কার করুন",bn_k:"ポリシュカール・コルン"},
    {ja:"ゴミ箱",yomi:"ごみばこ",vi:"Thùng rác",vi_k:"トゥン・ラック",id:"Tempat sampah",id_k:"トゥンパット・サンパ",en:"Trash bin",en_k:"トラッシュ・ビン",bn:"ময়লার বিন",bn_k:"モイラル・ビン"},
    {ja:"片付けてください",yomi:"かたづけてください",vi:"Hãy dọn dẹp",vi_k:"ハイ・ドン・デップ",id:"Tolong rapikan",id_k:"トロン・ラピカン",en:"Please tidy up",en_k:"プリーズ・タイディ・アップ",bn:"গুছিয়ে রাখুন",bn_k:"グチエ・ラクン"},
    {ja:"定位置",yomi:"ていいち",vi:"Vị trí cố định",vi_k:"ビ・チー・コ・ディン",id:"Posisi tetap",id_k:"ポシシ・テタップ",en:"Fixed position",en_k:"フィックスト・ポジション",bn:"নির্ধারিত জায়গা",bn_k:"ニルダリト・ジャイガ"}
  ]},

  "トラブル・報告": { color:"#dc2626", emoji:"🚨", group:"共通", items:[
    {ja:"止まりました",yomi:"とまりました",vi:"Đã dừng lại",vi_k:"ダー・ズン・ライ",id:"Sudah berhenti",id_k:"スダ・ブルヘンティ",en:"It stopped",en_k:"イット・ストップト",bn:"থেমে গেছে",bn_k:"テメ・ゲチェ"},
    {ja:"動きません",yomi:"うごきません",vi:"Không hoạt động",vi_k:"コン・ホアット・ドン",id:"Tidak bergerak",id_k:"ティダック・ブルグラック",en:"It doesn't move",en_k:"イット・ダズント・ムーブ",bn:"নড়ছে না",bn_k:"ノルচェ・ナ"},
    {ja:"音がおかしい",yomi:"おとがおかしい",vi:"Âm thanh lạ",vi_k:"アム・タン・ラ",id:"Suaranya aneh",id_k:"スアラニャ・アネー",en:"Strange noise",en_k:"ストレンジ・ノイズ",bn:"অদ্ভুত শব্দ",bn_k:"オドブット・シャブド"},
    {ja:"煙が出ています",yomi:"けむりがでています",vi:"Đang bốc khói",vi_k:"ダン・ボック・コイ",id:"Ada asap keluar",id_k:"アダ・アサップ",en:"Smoke is coming out",en_k:"スモーク・イズ・カミング",bn:"ধোঁয়া বেরোচ্ছে",bn_k:"ドゥオアヤ・ベロチェ"},
    {ja:"液体が漏れています",yomi:"えきたいがもれています",vi:"Chất lỏng đang rò rỉ",vi_k:"チャット・ロン・ロ・リー",id:"Cairan bocor",id_k:"チャイラン・ボコール",en:"Liquid is leaking",en_k:"リクイッド・イズ・リーキング",bn:"তরল চুয়াচ্ছে",bn_k:"トロル・チュアチェ"},
    {ja:"すぐ来てください",yomi:"すぐきてください",vi:"Hãy đến ngay",vi_k:"ハイ・デン・ンガイ",id:"Tolong segera datang",id_k:"トロン・スグラ・ダタン",en:"Please come right away",en_k:"プリーズ・カム・ライト・アウェイ",bn:"এখনই আসুন",bn_k:"エコノイ・アシュン"},
    {ja:"担当者を呼んでください",yomi:"たんとうしゃをよんでください",vi:"Hãy gọi người phụ trách",vi_k:"ハイ・ゴイ・ンゴイ",id:"Tolong panggil penanggung jawab",id_k:"トロン・パンギル",en:"Please call the person in charge",en_k:"プリーズ・コール",bn:"দায়িত্বশীল ব্যক্তিকে ডাকুন",bn_k:"ダイット・ডカン"},
    {ja:"記録してください",yomi:"きろくしてください",vi:"Hãy ghi lại",vi_k:"ハイ・ギ・ライ",id:"Tolong catat",id_k:"トロン・チャタット",en:"Please record it",en_k:"プリーズ・レコード",bn:"লিখে রাখুন",bn_k:"リখে・ラクン"},
    {ja:"原因",yomi:"げんいん",vi:"Nguyên nhân",vi_k:"ングエン・ニャン",id:"Penyebab",id_k:"プニェバブ",en:"Cause",en_k:"コーズ",bn:"কারণ",bn_k:"カロン"},
    {ja:"対策",yomi:"たいさく",vi:"Biện pháp",vi_k:"ビエン・ファップ",id:"Tindakan perbaikan",id_k:"ティンダカン",en:"Countermeasure",en_k:"カウンターメジャー",bn:"প্রতিকার",bn_k:"プロティカール"}
  ]},

  "工具": { color:"#84cc16", emoji:"🔧", group:"共通", items:[
    {ja:"ハンマー",yomi:"はんまー",vi:"Búa",vi_k:"ブア",id:"Palu",id_k:"パル",en:"Hammer",en_k:"ハンマー",bn:"হাতুড়ি",bn_k:"ハトゥリ"},
    {ja:"スパナ",yomi:"すぱな",vi:"Cờ lê",vi_k:"コ・レ",id:"Kunci pas",id_k:"クンチ・パス",en:"Wrench",en_k:"レンチ",bn:"রেঞ্চ",bn_k:"レンチ"},
    {ja:"ドライバー",yomi:"どらいばー",vi:"Tua vít",vi_k:"トゥア・ビット",id:"Obeng",id_k:"オベン",en:"Screwdriver",en_k:"スクリュードライバー",bn:"স্ক্রু ড্রাইভার",bn_k:"スクルー・ドライバー"},
    {ja:"メジャー",yomi:"めじゃー",vi:"Thước dây",vi_k:"トゥオック・ザイ",id:"Meteran",id_k:"メテラン",en:"Tape measure",en_k:"テープ・メジャー",bn:"মাপের ফিতা",bn_k:"マペル・フィタ"},
    {ja:"カッター",yomi:"かったー",vi:"Dao rọc giấy",vi_k:"ダオ・ロック・���ャイ",id:"Cutter",id_k:"カッター",en:"Box cutter",en_k:"ボックス・カッター",bn:"কাটার",bn_k:"カタール"},
    {ja:"ニッパー",yomi:"にっぱー",vi:"Kìm cắt",vi_k:"キム・カット",id:"Tang potong",id_k:"タン・ポトン",en:"Nipper",en_k:"ニッパー",bn:"নিপার",bn_k:"ニパール"},
    {ja:"グラインダー",yomi:"ぐらいんだー",vi:"Máy mài",vi_k:"マイ・マイ",id:"Gerinda",id_k:"グリンダ",en:"Grinder",en_k:"グラインダー",bn:"গ্রাইন্ডার",bn_k:"グラインダール"},
    {ja:"フォークリフト",yomi:"ふぉーくりふと",vi:"Xe nâng hàng",vi_k:"セー・ナン・ハン",id:"Forklift",id_k:"フォークリフト",en:"Forklift",en_k:"フォークリフト",bn:"ফর্কলিফট",bn_k:"フォークリフト"},
    {ja:"台車",yomi:"だいしゃ",vi:"Xe đẩy",vi_k:"セー・ダイ",id:"Gerobak",id_k:"グロバック",en:"Cart / Trolley",en_k:"カート",bn:"ট্রলি",bn_k:"トロリ"}
  ]},

  /* ══════════════════════════════════
     製造
  ══════════════════════════════════ */

  "金属・チェーン加工": { color:"#64748b", emoji:"🔩", group:"製造", items:[
    {ja:"チェーン",yomi:"ちぇーん",vi:"Xích",vi_k:"シック",id:"Rantai",id_k:"ランタイ",en:"Chain",en_k:"チェーン",bn:"চেইন",bn_k:"チェーン"},
    {ja:"プレス",yomi:"ぷれす",vi:"Dập",vi_k:"ダップ",id:"Press",id_k:"プレス",en:"Press",en_k:"プレス",bn:"প্রেস",bn_k:"プレス"},
    {ja:"バリ",yomi:"ばり",vi:"Ba via",vi_k:"バ・ビア",id:"Gerinda",id_k:"グリンダ",en:"Burr",en_k:"バリ",bn:"বার্র",bn_k:"バリ"},
    {ja:"焼き入れ",yomi:"やきいれ",vi:"Tôi cứng",vi_k:"トイ・クン",id:"Pengerasan",id_k:"プンゲラサン",en:"Heat treatment",en_k:"ヒート・トリートメント",bn:"তাপ চিকিৎসা",bn_k:"タップ"},
    {ja:"研磨",yomi:"けんま",vi:"Mài bóng",vi_k:"マイ・ボン",id:"Penghalusan",id_k:"プンハルサン",en:"Polishing",en_k:"ポリッシング",bn:"পালিশ",bn_k:"パリシュ"},
    {ja:"メッキ",yomi:"めっき",vi:"Mạ",vi_k:"マ",id:"Pelapisan logam",id_k:"プラピサン",en:"Plating",en_k:"プレーティング",bn:"প্লেটিং",bn_k:"プレーティング"},
    {ja:"ピン",yomi:"ぴん",vi:"Chốt",vi_k:"チョット",id:"Pin",id_k:"ピン",en:"Pin",en_k:"ピン",bn:"পিন",bn_k:"ピン"},
    {ja:"リンク",yomi:"りんく",vi:"Mắt xích",vi_k:"マット・シック",id:"Tautan",id_k:"タウタン",en:"Link",en_k:"リンク",bn:"লিংক",bn_k:"リンク"},
    {ja:"組立",yomi:"くみたて",vi:"Lắp ráp",vi_k:"ラップ・ラップ",id:"Perakitan",id_k:"プラキタン",en:"Assembly",en_k:"アセンブリ",bn:"সংযোজন",bn_k:"ソンジョジョン"},
    {ja:"油",yomi:"あぶら",vi:"Dầu",vi_k:"ザウ",id:"Minyak",id_k:"ミニャック",en:"Oil",en_k:"オイル",bn:"তেল",bn_k:"テル"},
    {ja:"梱包",yomi:"こんぽう",vi:"Đóng gói",vi_k:"ドン・ゴイ",id:"Pengemasan",id_k:"プングマサン",en:"Packing",en_k:"パッキング",bn:"প্যাকিং",bn_k:"パッキング"}
  ]},

  "精密機械・装置": { color:"#0891b2", emoji:"🎛️", group:"製造", items:[
    {ja:"クリーンルーム",yomi:"くりーんるーむ",vi:"Phòng sạch",vi_k:"フォン・サック",id:"Ruang bersih",id_k:"ルアン・ブルシ",en:"Clean room",en_k:"クリーン・ルーム",bn:"ক্লিন রুম",bn_k:"クリーン・ルーム"},
    {ja:"防塵",yomi:"ぼうじん",vi:"Chống bụi",vi_k:"チョン・ブイ",id:"Anti debu",id_k:"アンティ・デブ",en:"Dustproof",en_k:"ダストプルーフ",bn:"ধুলোরোধী",bn_k:"ダストプルーフ"},
    {ja:"静電気",yomi:"せいでんき",vi:"Tĩnh điện",vi_k:"ティン・ディエン",id:"Listrik statis",id_k:"リストリック",en:"Static electricity",en_k:"スタティック",bn:"স্থির বিদ্যুৎ",bn_k:"スタティック"},
    {ja:"精度",yomi:"せいど",vi:"Độ chính xác",vi_k:"ドー・チン・サック",id:"Presisi",id_k:"プレシシ",en:"Precision",en_k:"プレシジョン",bn:"নির্ভুলতা",bn_k:"プレシジョン"},
    {ja:"異物",yomi:"いぶつ",vi:"Tạp chất",vi_k:"タップ・チャット",id:"Benda asing",id_k:"ベンダ・アシン",en:"Foreign matter",en_k:"フォーリン・マター",bn:"বিদেশী পদার্থ",bn_k:"フォーリン"},
    {ja:"トレー",yomi:"とれー",vi:"Khay",vi_k:"カイ",id:"Nampan",id_k:"ナンパン",en:"Tray",en_k:"トレー",bn:"ট্রে",bn_k:"トレー"},
    {ja:"基板",yomi:"きばん",vi:"Bo mạch",vi_k:"ボー・マック",id:"PCB",id_k:"PCB",en:"Circuit board",en_k:"サーキット・ボード",bn:"সার্কিট বোর্ড",bn_k:"サーキット・ボード"},
    {ja:"ネジ締め",yomi:"ねじしめ",vi:"Vặn ốc vít",vi_k:"バン・オック",id:"Kencangkan baut",id_k:"ケンチャンカン",en:"Screw tightening",en_k:"スクリュー",bn:"স্ক্রু আঁটা",bn_k:"スクリュー"},
    {ja:"配線",yomi:"はいせん",vi:"Đấu dây",vi_k:"ダウ・ザイ",id:"Kabel",id_k:"カベル",en:"Wiring",en_k:"ワイヤリング",bn:"তারের সংযোগ",bn_k:"ワイヤリング"},
    {ja:"エアブロー",yomi:"えあぶろー",vi:"Thổi khí",vi_k:"トイ・キー",id:"Air blow",id_k:"エア・ブロー",en:"Air blow",en_k:"エア・ブロー",bn:"এয়ার ব্লো",bn_k:"エア・ブロー"}
  ]},

  "繊維・縫製": { color:"#db2777", emoji:"🧵", group:"製造", items:[
    {ja:"生地",yomi:"きじ",vi:"Vải",vi_k:"バイ",id:"Kain",id_k:"カイン",en:"Fabric",en_k:"ファブリック",bn:"কাপড়",bn_k:"カポール"},
    {ja:"糸",yomi:"いと",vi:"Chỉ",vi_k:"チー",id:"Benang",id_k:"ブナン",en:"Thread",en_k:"スレッド",bn:"সুতো",bn_k:"スト"},
    {ja:"ミシン",yomi:"みしん",vi:"Máy may",vi_k:"マイ・マイ",id:"Mesin jahit",id_k:"ムシン・ジャヒット",en:"Sewing machine",en_k:"ソーイング・マシーン",bn:"সেলাই মেশিন",bn_k:"セライ・マシン"},
    {ja:"縫製",yomi:"ほうせい",vi:"May vá",vi_k:"マイ・バー",id:"Jahit",id_k:"ジャヒット",en:"Sewing",en_k:"ソーイング",bn:"সেলাই",bn_k:"セライ"},
    {ja:"裁断",yomi:"さいだん",vi:"Cắt vải",vi_k:"カット・バイ",id:"Memotong kain",id_k:"ムモトン",en:"Cutting",en_k:"カッティング",bn:"কাটা",bn_k:"カタ"},
    {ja:"検反",yomi:"けんたん",vi:"Kiểm tra vảk",vi_k:"キエム・チャ・バイ",id:"Inspeksi kain",id_k:"インスペクシ",en:"Fabric inspection",en_k:"インスペクション",bn:"কাপড় পরীক্ষা",bn_k:"カポール"},
    {ja:"ロール",yomi:"ろーる",vi:"Cuộn vảk",vi_k:"クオン・バイ",id:"Gulungan kain",id_k:"グルンガン",en:"Roll",en_k:"ロール",bn:"রোল",bn_k:"ロール"},
    {ja:"染色",yomi:"せんしょく",vi:"Nhuộm màu",vi_k:"ニュオム・マウ",id:"Pewarnaan",id_k:"プワルナアン",en:"Dyeing",en_k:"ダイイング",bn:"রং করা",bn_k:"ロン・コラ"},
    {ja:"ほつれ",yomi:"ほつれ",vi:"Sổ chỉ",vi_k:"ソー・チー",id:"Serat terurai",id_k:"スラット",en:"Fraying",en_k:"フレイング",bn:"়ুতো খোলা",bn_k:"スト・コラ"},
    {ja:"巻き取り",yomi:"まきとり",vi:"Cuốn lại",vi_k:"クオン・ライ",id:"Menggulung",id_k:"ムングルン",en:"Winding",en_k:"ワインディング",bn:"গোটানো",bn_k:"ゴタノ"},
    {ja:"アイロン",yomi:"あいろん",vi:"Bàn là",vi_k:"バン・ラー",id:"Setrika",id_k:"ストリカ",en:"Iron",en_k:"アイアン",bn:"আয়রন",bn_k:"アイロン"}
  ]},

  /* ══════════════════════════════════
     建設
  ══════════════════════════════════ */

  "建設・土木": { color:"#b45309", emoji:"🏗️", group:"建設", items:[
    {ja:"足場",yomi:"あしば",vi:"Giàn giáo",vi_k:"ジャン・ジャオ",id:"Perancah",id_k:"プランチャ",en:"Scaffolding",en_k:"スキャフォールディング",bn:"মাচা",bn_k:"マチャ"},
    {ja:"安全帯",yomi:"あんぜんたい",vi:"Dây an toàn",vi_k:"ザイ・アン・トアン",id:"Sabuk pengaman",id_k:"サブック",en:"Safety harness",en_k:"セーフティ・ハーネス",bn:"সেফটি হার্নেস",bn_k:"セーフティ"},
    {ja:"養生",yomi:"ようじょう",vi:"Che phủ bảo vệ",vi_k:"チェ・フー",id:"Penutup pelindung",id_k:"プリンドゥン",en:"Protection",en_k:"プロテクション",bn:"সুরক্ষা আবরণ",bn_k:"スロクシャ"},
  ]},

  /* ══════════════════════════════════
     生活・会話
  ══════════════════════════════════ */

  "日常会話・あいさつ": { color:"#8b5cf6", emoji:"💬", group:"生活・会話", items:[
    {ja:"おはようございます",yomi:"おはようございます",vi:"Chào buổi sáng",vi_k:"チャオ・ブオイ・サン",id:"Selamat pagi",id_k:"スラマット・パギ",en:"Good morning",en_k:"グッド・モーニング",bn:"শুভ সকাল",bn_k:"シュボ・シュカル"},
    {ja:"お疲れ様でした",yomi:"おつかれさまでした",vi:"Bạn đã vất vả rồi",vi_k:"バン・ダー・バット・バー",id:"Terima kasih sudah bekerja keras",id_k:"テリマ",en:"Good work today",en_k:"グッド・ワーク",bn:"কষ্ট করেছেন",bn_k:"コシュト・コレチェন"},
    {ja:"よろしくお願いします",yomi:"よろしくおねがいします",vi:"Mong bạn giúp đỡ",vi_k:"モン・バン・ジュップ",id:"Mohon kerja sama",id_k:"モホン",en:"Nice to meet you / Please",en_k:"ナイス・トゥ・ミート",bn:"সহযোগিতা করবেন",bn_k:"シャホジョギタ"},
    {ja:"ありがとうございます",yomi:"ありがとうございます",vi:"Cảm ơn bạn",vi_k:"カム・オン・バン",id:"Terima kasih",id_k:"テリマ・カシー",en:"Thank you",en_k:"サンキュー",bn:"ধন্যবাদ",bn_k:"ドンノバッド"},
    {ja:"すみません",yomi:"すみません",vi:"Xin lỗk",vi_k:"シン・ロイ",id:"Permisi / Maaf",id_k:"プルミシ",en:"Excuse me / Sorry",en_k:"エクスキューズ・ミー",bn:"মাফ করবেন",bn_k:"マフ・コルベン"},
    {ja:"休憩",yomi:"きゅうけい",vi:"Nghỉ giải lao",vi_k:"ンギー・ジャイ・ラオ",id:"Istirahat",id_k:"イスティラハット",en:"Break time",en_k:"ブレイク・タイム",bn:"বিরতি",bn_k:"ビロティ"},
    {ja:"トイレ",yomi:"といれ",vi:"Nhà vệ sinh",vi_k:"ニャー・ベ・シン",id:"Toilet",id_k:"トイレット",en:"Restroom",en_k:"レストルーム",bn:"টয়লেট",bn_k:"トイレット"},
    {ja:"食堂",yomi:"しょくどう",vi:"Nhà ăn",vi_k:"ニャー・アン",id:"Kantin",id_k:"カンティン",en:"Cafeteria",en_k:"カフェテリア",bn:"ক্যান্টিন",bn_k:"カンティン"},
    {ja:"電話",yomi:"でんわ",vi:"Điện thoại",vi_k:"ディエン・トアイ",id:"Telepon",id_k:"テレポン",en:"Phone",en_k:"フォン",bn:"ফোন",bn_k:"フォン"},
    {ja:"住所",yomi:"じゅうしょ",vi:"Địa chỉ",vi_k:"ディア・チー",id:"Alamat",id_k:"アラマット",en:"Address",en_k:"アドレス",bn:"ঠিকানা",bn_k:"ティカナ"},
    {ja:"名前",yomi:"なまえ",vi:"Tên",vi_k:"テン",id:"Nama",id_k:"ナマ",en:"Name",en_k:"ネーム",bn:"নাম",bn_k:"ナム"},
    {ja:"国籍",yomi:"こくせき",vi:"Quốc tịch",vi_k:"クオック・ティック",id:"Kewarganegaraan",id_k:"クワルガ",en:"Nationality",en_k:"ナショナリティ",bn:"জাতীয়তা",bn_k:"ジャティヨタ"}
  ]},

  "体調・病院": { color:"#f43f5e", emoji:"🏥", group:"生活・会話", items:[
    {ja:"頭が痛い",yomi:"あたまがいたい",vi:"Đau đầu",vi_k:"ダウ・ダウ",id:"Sakit kepala",id_k:"サキット・クパラ",en:"Headache",en_k:"ヘッドエイク",bn:"মাথা ব্যথা",bn_k:"マタ・ビャタ"},
    {ja:"お腹が痛い",yomi:"おなかがいたい",vi:"Đau bụng",vi_k:"ダウ・ブン",id:"Sakit perut",id_k:"サキット・プルット",en:"Stomachache",en_k:"ストマックエイク",bn:"পেট ব্যথা",bn_k:"ペット・ビャタ"},
    {ja:"熱がある",yomi:"ねつがある",vi:"Có sốt",vi_k:"コ・ソット",id:"Demam",id_k:"ドゥマム",en:"Have a fever",en_k:"ハブ・ア・フィーバー",bn:"জ্বর আছে",bn_k:"ジョル・アチェ"},
    {ja:"吐き気がする",yomi:"はきけがする",vi:"Buồn nôn",vi_k:"ブオン・ノン",id:"Mual",id_k:"ムアル",en:"Feel nauseous",en_k:"フィール・ノーシャス",bn:"বমি বমি ভাব",bn_k:"ボミ・ボミ"},
    {ja:"めまいがする",yomi:"めまいがする",vi:"Chóng mặt",vi_k:"チョン・マット",id:"Pusing",id_k:"プシン",en:"Feel dizzy",en_k:"フィール・ディジー",bn:"মাথা ঘুরছে",bn_k:"マタ・グルチェ"},
    {ja:"バイタル",yomi:"ばいたる",vi:"Dấu hiệu sinh tồn",vi_k:"ザウ・ヒウ",id:"Tanda vital",id_k:"タンダ・ビタル",en:"Vital signs",en_k:"バイタル・サインズ",bn:"ভাইটাল সাইন",bn_k:"バイタル"}
  ]},

  /* ══════════════════════════════════
     生活・会話
  ══════════════════════════════════ */

  "日常会話・あいさつ": { color:"#8b5cf6", emoji:"💬", group:"生活・会話", items:[
    {ja:"おはようございます",yomi:"おはようございます",vi:"Chào buổi sáng",vi_k:"チャオ・ブオイ・サン",id:"Selamat pagi",id_k:"スラマット・パギ",en:"Good morning",en_k:"グッド・モーニング",bn:"শুভ সকাল",bn_k:"シュボ・シュカル"},
    {ja:"お疲れ様でした",yomi:"おつかれさまでした",vi:"Bạn đã vất vả rồi",vi_k:"バン・ダー・バット・バー",id:"Terima kasih sudah bekerja keras",id_k:"テリマ",en:"Good work today",en_k:"グッド・ワーク",bn:"কষ্ট করেছেন",bn_k:"コシュト・コレチェন"},
    {ja:"よろしくお願いします",yomi:"よろしくおねがいします",vi:"Mong bạn giúp đỡ",vi_k:"モン・バン・ジュップ",id:"Mohon kerja sama",id_k:"モホン",en:"Nice to meet you / Please",en_k:"ナイス・トゥ・ミート",bn:"সহযোগিতা করবেন",bn_k:"シャホジョギタ"},
    {ja:"ありがとうございます",yomi:"ありがとうございます",vi:"Cảm ơn bạn",vi_k:"カム・オン・バン",id:"Terima kasih",id_k:"テリマ・カシー",en:"Thank you",en_k:"サンキュー",bn:"ধন্যবাদ",bn_k:"ドンノバッド"},
    {ja:"すみません",yomi:"すみません",vi:"Xin lỗk",vi_k:"シン・ロイ",id:"Permisi / Maaf",id_k:"プルミシ",en:"Excuse me / Sorry",en_k:"エクスキューズ・ミー",bn:"মাফ করবেন",bn_k:"マフ・コルベン"},
    {ja:"休憩",yomi:"きゅうけい",vi:"Nghỉ giải lao",vi_k:"ンギー・ジャイ・ラオ",id:"Istirahat",id_k:"イスティラハット",en:"Break time",en_k:"ブレイク・タイム",bn:"বিরতি",bn_k:"ビロティ"},
    {ja:"トイレ",yomi:"といれ",vi:"Nhà vệ sinh",vi_k:"ニャー・ベ・シン",id:"Toilet",id_k:"トイレット",en:"Restroom",en_k:"レストルーム",bn:"টয়লেট",bn_k:"トイレット"},
    {ja:"食堂",yomi:"しょくどう",vi:"Nhà ăn",vi_k:"ニャー・アン",id:"Kantin",id_k:"カンティン",en:"Cafeteria",en_k:"カフェテリア",bn:"ক্যান্টিন",bn_k:"カンティン"},
    {ja:"電話",yomi:"でんわ",vi:"Điện thoại",vi_k:"ディエン・トアイ",id:"Telepon",id_k:"テレポン",en:"Phone",en_k:"フォン",bn:"ফোন",bn_k:"フォン"},
    {ja:"住所",yomi:"じゅうしょ",vi:"Địa chỉ",vi_k:"ディア・チー",id:"Alamat",id_k:"アラマット",en:"Address",en_k:"アドレス",bn:"ঠিকানা",bn_k:"ティカナ"},
    {ja:"名前",yomi:"なまえ",vi:"Tên",vi_k:"テン",id:"Nama",id_k:"ナマ",en:"Name",en_k:"ネーム",bn:"নাম",bn_k:"ナム"},
    {ja:"国籍",yomi:"こくせき",vi:"Quốc tịch",vi_k:"クオック・ティック",id:"Kewarganegaraan",id_k:"クワルガ",en:"Nationality",en_k:"ナショナリティ",bn:"জাতীয়তা",bn_k:"ジャティヨタ"}
  ]},

  "体調・病院": { color:"#f43f5e", emoji:"🏥", group:"生活・会話", items:[
    {ja:"頭が痛い",yomi:"あたまがいたい",vi:"Đau đầu",vi_k:"ダウ・ダウ",id:"Sakit kepala",id_k:"サキット・クパラ",en:"Headache",en_k:"ヘッドエイク",bn:"মাথা ব্যথা",bn_k:"マタ・ビャタ"},
    {ja:"お腹が痛い",yomi:"おなかがいたい",vi:"Đau bụng",vi_k:"ダウ・ブン",id:"Sakit perut",id_k:"サキット・プルット",en:"Stomachache",en_k:"ストマックエイク",bn:"পেট ব্যথা",bn_k:"ペット・ビャタ"},
    {ja:"熱がある",yomi:"ねつがある",vi:"Có sốt",vi_k:"コ・ソット",id:"Demam",id_k:"ドゥマム",en:"Have a fever",en_k:"ハブ・ア・フィーバー",bn:"জ্বর আছে",bn_k:"ジョル・アチェ"},
    {ja:"吐き気がする",yomi:"はきけがする",vi:"Buồn nôn",vi_k:"ブオン・ノン",id:"Mual",id_k:"ムアル",en:"Feel nauseous",en_k:"フィール・ノーシャス",bn:"বমি বমি ভাব",bn_k:"ボミ・ボミ"},
    {ja:"めまいがする",yomi:"めまいがする",vi:"Chóng mặt",vi_k:"チョン・マット",id:"Pusing",id_k:"プシン",en:"Feel dizzy",en_k:"フィール・ディジー",bn:"মাথা ঘোরা",bn_k:"マタ・ゴラ"},
    {ja:"体調が悪い",yomi:"たいちょうがわるい",vi:"Không khỏe",vi_k:"コン・コエ",id:"Tidak sehat",id_k:"ティダック・スハット",en:"I feel sick",en_k:"アイ・フィール・シック",bn:"অসুস্থ",bn_k:"オシュストー"},
    {ja:"咳が出る",yomi:"せきがでる",vi:"Ho",vi_k:"ホー",id:"Batuk",id_k:"バトゥック",en:"Coughing",en_k:"コーフィング",bn:"কাশি",bn_k:"カシ"},
    {ja:"病院に行く",yomi:"びょういんにいく",vi:"Đi bệnh viện",vi_k:"ディ・ベン・ビエン",id:"Pergi ke rumah sakit",id_k:"プルギ・クルマ",en:"Go to hospital",en_k:"ゴー・トゥ・ホスピタル",bn:"হাসপাতালে যাওয়া",bn_k:"ハシュパタレ・ジャওয়া"},
    {ja:"薬",yomi:"くすり",vi:"Thuốc",vi_k:"トゥオック",id:"Obat",id_k:"オバット",en:"Medicine",en_k:"メディシン",bn:"ওষুধ",bn_k:"オシュド"},
    {ja:"アレルギー",yomi:"あれるぎー",vi:"Dị ứng",vi_k:"ジ・ウン",id:"Alergi",id_k:"アレルギ",en:"Allergy",en_k:"アレルジー",bn:"অ্যালার্জি",bn_k:"アレルジー"},
    {ja:"血が出ている",yomi:"ちがでている",vi:"Đang chảy máu",vi_k:"ダン・チャイ・マウ",id:"Berdarah",id_k:"ブルダラ",en:"Bleeding",en_k:"ブリーディング",bn:"রক্ত পড়ছে",bn_k:"ロクト・ポルチェ"},
    {ja:"救急車を呼ぶ",yomi:"きゅうきゅうしゃをよぶ",vi:"Gọi xe cấp cứu",vi_k:"ゴイ・セー・カップ",id:"Panggil ambulans",id_k:"パンギル・アンブランス",en:"Call an ambulance",en_k:"コール・アン・アンビュランス",bn:"অ্যাম্বুলেন্স ডাকুন",bn_k:"アンブレンス・ダクン"},
    {ja:"バイタル",yomi:"ばいたる",vi:"Dấu hiệu sinh tồn",vi_k:"ザウ・ヒウ",id:"Tanda vital",id_k:"タンダ・ビタル",en:"Vital signs",en_k:"バイタル・サインズ",bn:"ভাইটাল সাইন",bn_k:"バイタル"},
    {ja:"休んでください",yomi:"やすんでください",vi:"Hãy nghỉ ngơi",vi_k:"ハイ・ンギー・ンゴイ",id:"Tolong istirahat",id_k:"トロン・イスティラハット",en:"Please rest",en_k:"プリーズ・レスト",bn:"বিশ্রাম নিন",bn_k:"ビシュラム・ニン"}
  ]}

};

const LANGS = {
  vi: { name:"ベトナム語",  flag:"🇻🇳", key:"vi",  kana:"vi_k"  },
  id: { name:"インドネシア語", flag:"🇮🇩", key:"id",  kana:"id_k"  },
  en: { name:"英語",       flag:"🇺🇸", key:"en",  kana:"en_k"  },
  bn: { name:"ベンガル語", flag:"🇧🇩", key:"bn",  kana:"bn_k"  }
};
