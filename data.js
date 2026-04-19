const DATA = {

  // ========== フロー（困りごと） ==========
  flow: [
    {
      id: "late", icon: "⏰",
      title: { ja: "遅れそう", vi: "Sắp đi muộn", id: "Akan terlambat", en: "Going to be late.", bn: "দেরি হবে" },
      steps: [
        { no: 1,
          action: { ja: "電話をかける", vi: "Gọi điện thoại", id: "Menelepon", en: "Call now.", bn: "ফোন করুন" },
          show: { ja: "おはようございます。\n○○です。", vi: "Chào buổi sáng.\nTôi là ○○.", id: "Selamat pagi.\nSaya ○○.", en: "Good morning.\nThis is ○○.", bn: "শুভ সকাল।\nআমি ○○।" }
        },
        { no: 2,
          action: { ja: "遅れることを伝える", vi: "Thông báo sẽ đến muộn", id: "Beritahu akan terlambat", en: "Tell them you're going to be late.", bn: "দেরি হবে জানান" },
          show: { ja: "今日、遅刻します。\n○○分ほど遅れます。", vi: "Hôm nay tôi sẽ đi muộn.\nKhoảng ○○ phút.", id: "Hari ini saya terlambat.\nSekitar ○○ menit.", en: "I will be late today.\nAbout ○○ minutes late.", bn: "আজ দেরি হবে।\nআমি প্রায় ○○ মিনিট দেরি করব।" }
        },
        { no: 3,
          action: { ja: "理由を選ぶ", vi: "Chọn lý do", id: "Pilih alasan", en: "Choose a reason", bn: "কারণ বেছে নিন" },
          options: [
            { ja: "電車が遅れています。", vi: "Tàu điện bị trễ.", id: "Kereta terlambat.", en: "The train is delayed.", bn: "ট্রেন দেরি হচ্ছে।" },
            { ja: "渋滞しています。", vi: "Đường bị tắc.", id: "Macet.", en: "There is traffic.", bn: "যানজট আছে।" },
            { ja: "寝坊しました。\n申し訳ありません。", vi: "Tôi dậy muộn.\nXin lỗi.", id: "Saya kesiangan.\nMaaf.", en: "I overslept.\nSorry.", bn: "ঘুম থেকে দেরিতে উঠেছি।\nমাফ করবেন।" },
            { ja: "体調が悪いです。", vi: "Tôi không khỏe.", id: "Saya tidak enak badan.", en: "I'm not feeling well.", bn: "অসুস্থ বোধ করছি।" },
          ]
        },
        { no: 4,
          action: { ja: "締めの言葉", vi: "Lời kết", id: "Kata penutup", en: "Closing words", bn: "শেষ কথা" },
          show: { ja: "よろしくお願いします。\n失礼します。", vi: "Xin hãy thông cảm.\nXin chào.", id: "Mohon pengertiannya.\nSampai jumpa.", en: "Thank you.\nGoodbye.", bn: "ধন্যবাদ বুঝার জন্য।\nবিদায়।" }
        },
      ]
    },
    {
      id: "sick", icon: "🤒",
      title: { ja: "体調が悪い・休みたい", vi: "Không khỏe / Muốn nghỉ", id: "Tidak enak badan / Ingin absen", en: "Feel sick / Want day off", bn: "অসুস্থ / ছুটি নিতে চাই" },
      steps: [
        { no: 1,
          action: { ja: "電話をかける（始業30分前まで）", vi: "Gọi điện (trước 30 phút làm việc)", id: "Telepon (30 menit sebelum kerja)", en: "Call at least 30 min before work.", bn: "ফোন করুন (কাজ শুরুর ৩০ মিনিট আগে)" },
          show: { ja: "おはようございます。\n○○です。", vi: "Chào buổi sáng.\nTôi là ○○.", id: "Selamat pagi.\nSaya ○○.", en: "Good morning.\nThis is ○○.", bn: "শুভ সকাল।\nআমি ○○।" }
        },
        { no: 2,
          action: { ja: "休みたいことを伝える", vi: "Thông báo muốn nghỉ", id: "Beritahu ingin absen", en: "Tell them you need the day off.", bn: "ছুটি নিতে চান জানান" },
          show: { ja: "今日、体調が悪くて\n休ませてください。\nよろしくお願いします。", vi: "Hôm nay tôi không khỏe,\nxin cho tôi nghỉ.\nCảm ơn.", id: "Hari ini saya tidak enak badan,\nmohon izin absen.\nTerima kasih.", en: "I'm not feeling well today.\nPlease let me take the day off.\nThank you.", bn: "আজ অসুস্থ বোধ করছি।\nছুটি দিন দয়া করে।\nধন্যবাদ।" }
        },
        { no: 3,
          action: { ja: "症状を選ぶ（任意）", vi: "Chọn triệu chứng (tùy chọn)", id: "Pilih gejala (opsional)", en: "Choose a symptom (optional).", bn: "উপসর্গ বেছে নিন (ঐচ্ছিক)" },
          options: [
            { ja: "熱があります。", vi: "Tôi bị sốt.", id: "Saya demam.", en: "I have a fever.", bn: "জ্বর আছে।" },
            { ja: "お腹が痛いです。", vi: "Tôi bị đau bụng.", id: "Saya sakit perut.", en: "I have a stomachache.", bn: "পেট ব্যথা আছে।" },
            { ja: "頭が痛いです。", vi: "Tôi bị đau đầu.", id: "Saya sakit kepala.", en: "I have a headache.", bn: "মাথা ব্যথা আছে।" },
            { ja: "病院に行きます。", vi: "Tôi sẽ đi bệnh viện.", id: "Saya akan ke rumah sakit.", en: "I will go to the hospital.", bn: "হাসপাতালে যাব।" },
          ]
        },
      ]
    },
    {
      id: "work_trouble", icon: "🔧",
      title: { ja: "仕事でわからない・困った", vi: "Không hiểu / Gặp khó khăn", id: "Tidak mengerti / Ada masalah", en: "Don't understand / Having trouble", bn: "কাজে বুঝছি না / সমস্যা" },
      steps: [
        { no: 1,
          action: { ja: "担当者を呼ぶ", vi: "Gọi người phụ trách", id: "Panggil penanggung jawab", en: "Call your supervisor", bn: "দায়িত্বশীলকে ডাকুন" },
          show: { ja: "すみません。\n教えてください。", vi: "Xin lỗi.\nXin hãy chỉ cho tôi.", id: "Permisi.\nTolong ajarkan saya.", en: "Excuse me.\nPlease show me.", bn: "মাফ করবেন।\nআমাকে দেখান দয়া করে।" }
        },
        { no: 2,
          action: { ja: "状況を選ぶ", vi: "Chọn tình huống", id: "Pilih situasi", en: "Choose your situation", bn: "পরিস্থিতি বেছে নিন" },
          options: [
            { ja: "これはどうやって\nやりますか？", vi: "Cái này làm thế nào ạ?", id: "Ini caranya bagaimana?", en: "How do I do this?", bn: "এটা কীভাবে করব?" },
            { ja: "もう一度\n教えてください。", vi: "Xin hãy dạy lại một lần nữa.", id: "Tolong ajarkan sekali lagi.", en: "Please show me again.", bn: "আরেকবার শেখান দয়া করে।" },
            { ja: "機械が\n動きません。", vi: "Máy không hoạt động.", id: "Mesin tidak berjalan.", en: "The machine won't work.", bn: "মেশিন কাজ করছে না।" },
            { ja: "これは\n不良品ですか？", vi: "Cái này có phải hàng lỗi không?", id: "Apakah ini barang cacat?", en: "Is this defective?", bn: "এটা কি ত্রুটিপূর্ণ?" },
            { ja: "危険です！\n止めてください！", vi: "Nguy hiểm!\nXin hãy dừng lại!", id: "Berbahaya!\nTolong hentikan!", en: "Danger!\nStop!", bn: "বিপজ্জনক!\nথামুন দয়া করে!" },
            { ja: "終わりました。", vi: "Tôi đã xong.", id: "Sudah selesai.", en: "I'm done.", bn: "শেষ হয়েছে।" },
          ]
        },
      ]
    },
    {
      id: "garbage", icon: "🗑️",
      title: { ja: "ゴミを出したい", vi: "Muốn đổ rác", id: "Ingin membuang sampah", en: "Want to take out garbage", bn: "ময়লা ফেলতে চাই" },
      steps: [
        { no: 1,
          action: { ja: "ゴミの種類を確認する", vi: "Kiểm tra loại rác", id: "Periksa jenis sampah", en: "Check garbage type", bn: "ময়লার ধরন দেখুন" },
          options: [
            { ja: "燃えるゴミ\n（生ゴミ・紙・布）", vi: "Rác cháy\n(Thực phẩm, giấy, vải)", id: "Mudah terbakar\n(Sisa makanan, kertas, kain)", en: "Burnable\n(Food, paper, cloth)", bn: "পোড়ানো যায়\n(খাবার/কাগজ/কাপড়)" },
            { ja: "燃えないゴミ\n（金属・ガラス・陶器）", vi: "Rác không cháy\n(Kim loại, thủy tinh, gốm)", id: "Tidak terbakar\n(Logam, kaca, keramik)", en: "Non-burnable\n(Metal, glass, ceramic)", bn: "পোড়ানো যায় না\n(ধাতু/কাচ/সিরামিক)" },
            { ja: "資源ゴミ\n（ペットボトル・缶・瓶）", vi: "Rác tái chế\n(Chai nhựa, lon, chai thủy tinh)", id: "Daur ulang\n(Botol plastik, kaleng, botol kaca)", en: "Recyclable\n(Bottles, cans, glass)", bn: "রিসাইকেল\n(প্লাস্টিক/ক্যান/কাচ)" },
          ]
        },
        { no: 2,
          action: { ja: "収集日・時間を確認する", vi: "Kiểm tra ngày và giờ thu gom", id: "Periksa hari pengangkutan", en: "Check collection day/time", bn: "সংগ্রহের দিন দেখুন" },
          show: { ja: "収集日の朝8時までに出す。\n前日の夜は出さないでください。", vi: "Đổ rác trước 8 giờ sáng ngày thu gom.\nKhông đổ vào tối hôm trước.", id: "Keluarkan sebelum jam 8 pagi.\nJangan malam sebelumnya.", en: "Put out by 8am on collection day.\nNot the night before.", bn: "সকাল ৮টার আগে রাখুন।\nআগের রাতে রাখবেন না।" }
        },
        { no: 3,
          action: { ja: "指定袋に入れて出す", vi: "Cho vào túi quy định và đổ", id: "Masukkan ke kantong yang ditentukan", en: "Put in designated bag and take out", bn: "নির্ধারিত ব্যাগে রেখে ফেলুন" },
          show: { ja: "指定のゴミ袋を使ってください。\nゴミ置き場に出してください。", vi: "Hãy dùng túi rác quy định.\nĐặt ở nơi để rác.", id: "Gunakan kantong sampah yang ditentukan.\nLetakkan di tempat pembuangan.", en: "Use the right garbage bag.\nPut it at the collection point.", bn: "নির্ধারিত ময়লার ব্যাগ ব্যবহার করুন।\nময়লা রাখার জায়গায় রাখুন।" }
        },
      ]
    },
    {
      id: "hospital_flow", icon: "🏥",
      title: { ja: "病院に行きたい", vi: "Muốn đi bệnh viện", id: "Ingin pergi ke rumah sakit", en: "Want to go to the hospital.", bn: "হাসপাতালে যেতে চাই" },
      steps: [
        { no: 1,
          action: { ja: "保険証を持つ", vi: "Mang theo thẻ bảo hiểm", id: "Bawa kartu asuransi", en: "Bring your insurance card.", bn: "বীমা কার্ড নিন" },
          show: { ja: "保険証を忘れずに\n持って行ってください。", vi: "Đừng quên mang theo\nthẻ bảo hiểm.", id: "Jangan lupa bawa\nkartu asuransi.", en: "Don't forget your\ninsurance card.", bn: "বীমা কার্ড নিতে\nভুলবেন না।" }
        },
        { no: 2,
          action: { ja: "症状を選ぶ", vi: "Chọn triệu chứng", id: "Pilih gejala", en: "Choose your symptom", bn: "উপসর্গ বেছে নিন" },
          options: [
            { ja: "お腹が痛いです。", vi: "Tôi bị đau bụng.", id: "Saya sakit perut.", en: "I have a stomachache.", bn: "পেট ব্যথা আছে।" },
            { ja: "頭が痛いです。", vi: "Tôi bị đau đầu.", id: "Saya sakit kepala.", en: "I have a headache.", bn: "মাথা ব্যথা আছে।" },
            { ja: "熱があります。", vi: "Tôi bị sốt.", id: "Saya demam.", en: "I have a fever.", bn: "জ্বর আছে।" },
            { ja: "ここが痛いです。\n（指さして）", vi: "Chỗ này đau.\n(Chỉ vào)", id: "Di sini sakit.\n(Tunjuk)", en: "It hurts here.\n(Point to it)", bn: "এখানে ব্যথা।\n(আঙুল দিয়ে দেখান)" },
            { ja: "吐き気がします。", vi: "Tôi buồn nôn.", id: "Saya mual.", en: "I feel nauseous.", bn: "বমি বমি লাগছে।" },
            { ja: "動けません。", vi: "Tôi không thể di chuyển.", id: "Saya tidak bisa bergerak.", en: "I cannot move.", bn: "নড়াচড়া করতে পারছি না।" },
          ]
        },
        { no: 3,
          action: { ja: "受付で見せる", vi: "Cho xem tại quầy lễ tân", id: "Tunjukkan di resepsionis", en: "Show this at reception.", bn: "রিসেপশনে দেখান" },
          show: { ja: "初めて来ました。\n診察をお願いします。\n保険証があります。", vi: "Đây là lần đầu tôi đến.\nTôi muốn khám bệnh.\nTôi có thẻ bảo hiểm.", id: "Ini pertama kali saya datang.\nSaya ingin berobat.\nSaya punya kartu asuransi.", en: "This is my first visit.\nI would like to see a doctor.\nI have my insurance card.", bn: "প্রথমবার এসেছি।\nডাক্তার দেখাতে চাই।\nবীমা কার্ড আছে।" }
        },
        { no: 4,
          action: { ja: "わからないとき", vi: "Khi không hiểu", id: "Ketika tidak mengerti", en: "When you don't understand.", bn: "না বুঝলে" },
          show: { ja: "日本語がわかりません。\nゆっくり話してください。", vi: "Tôi không hiểu tiếng Nhật.\nXin hãy nói chậm lại.", id: "Saya tidak mengerti bahasa Jepang.\nTolong berbicara pelan-pelan.", en: "I don't understand Japanese.\nPlease speak slowly.", bn: "জাপানি বুঝি না।\nধীরে কথা বলুন।" }
        },
      ]
    },
  ],

  // ========== ボタン系（タップして見せる） ==========
  button: [
    {
      id: "emergency", cat: "emergency", icon: "🚨",
      title: { ja: "緊急連絡", vi: "Khẩn cấp", id: "Darurat", en: "Emergency", bn: "জরুরি" },
      sections: [
        { label: { ja: "今すぐ電話", vi: "Gọi ngay", id: "Hubungi sekarang", en: "Call now", bn: "এখনই ফোন করুন" }, items: [
          { jp: "119に電話\n（救急・火事）", tr: { vi: "Gọi 119\n(Cấp cứu / Cháy)", id: "Hubungi 119\n(Ambulans / Kebakaran)", en: "Call 119\n(Ambulance / Fire)", bn: "119 ফোন করুন\n(অ্যাম্বুলেন্স/আগুন)" }, color: "red" },
          { jp: "110に電話\n（警察）", tr: { vi: "Gọi 110\n(Cảnh sát)", id: "Hubungi 110\n(Polisi)", en: "Call 110\n(Police)", bn: "110 ফোন করুন\n(পুলিশ)" }, color: "red" },
        ]},
        { label: { ja: "見せるフレーズ", vi: "Câu để cho xem", id: "Frasa untuk ditunjukkan", en: "Show these phrases", bn: "দেখানোর বাক্য" }, items: [
          { jp: "助けてください！", tr: { vi: "Xin hãy giúp tôi!", id: "Tolong saya!", en: "Please help me!", bn: "সাহায্য করুন!" }, color: "red" },
          { jp: "人が倒れています！", tr: { vi: "Có người bị ngã!", id: "Ada orang pingsan!", en: "Someone has collapsed!", bn: "কেউ পড়ে গেছেন!" }, color: "red" },
          { jp: "火事です！", tr: { vi: "Có cháy!", id: "Ada kebakaran!", en: "There is a fire!", bn: "আগুন লেগেছে!" }, color: "red" },
          { jp: "交通事故です！", tr: { vi: "Có tai nạn giao thông!", id: "Ada kecelakaan!", en: "Traffic accident!", bn: "সড়ক দুর্ঘটনা!" }, color: "red" },
          { jp: "住所はここです\n（画面を見せる）", tr: { vi: "Địa chỉ ở đây\n(Cho xem màn hình)", id: "Alamatnya di sini\n(Tunjukkan layar)", en: "Address is here\n(Show screen)", bn: "ঠিকানা এখানে\n(স্ক্রিন দেখান)" }, color: "amber" },
        ]},
      ]
    },
    {
      id: "hospital", cat: "hospital", icon: "🏥",
      title: { ja: "病院・薬局", vi: "Bệnh viện / Nhà thuốc", id: "Rumah sakit / Apotek", en: "Hospital / Pharmacy", bn: "হাসপাতাল/ফার্মেসি" },
      sections: [
        { label: { ja: "症状を見せる", vi: "Cho xem triệu chứng", id: "Tunjukkan gejala", en: "Show symptoms", bn: "উপসর্গ দেখান" }, items: [
          { jp: "お腹が痛いです", tr: { vi: "Tôi bị đau bụng", id: "Saya sakit perut", en: "I have a stomachache.", bn: "পেট ব্যথা আছে" }, color: "red" },
          { jp: "頭が痛いです", tr: { vi: "Tôi bị đau đầu", id: "Saya sakit kepala", en: "I have a headache.", bn: "মাথা ব্যথা আছে" }, color: "red" },
          { jp: "熱があります", tr: { vi: "Tôi bị sốt", id: "Saya demam", en: "I have a fever.", bn: "জ্বর আছে" }, color: "red" },
          { jp: "吐き気がします", tr: { vi: "Tôi buồn nôn", id: "Saya mual", en: "I feel nauseous.", bn: "বমি বমি লাগছে" }, color: "red" },
          { jp: "ここが痛いです\n（指さして）", tr: { vi: "Chỗ này đau\n(Chỉ vào)", id: "Di sini sakit\n(Tunjuk)", en: "It hurts here.\n(Point to it)", bn: "এখানে ব্যথা\n(আঙুল দিয়ে)" }, color: "red" },
          { jp: "動けません", tr: { vi: "Tôi không thể di chuyển", id: "Saya tidak bisa bergerak", en: "I can't move.", bn: "নড়াচড়া করতে পারছি না" }, color: "red" },
        ]},
        { label: { ja: "受付で使う", vi: "Dùng tại quầy lễ tân", id: "Gunakan di resepsionis", en: "Use at reception", bn: "রিসেপশনে ব্যবহার করুন" }, items: [
          { jp: "初めて来ました\n診察をお願いします", tr: { vi: "Lần đầu đến\nMuốn khám bệnh", id: "Pertama kali datang\nIngin berobat", en: "First visit.\nI'd like to see a doctor.", bn: "প্রথমবার এসেছি\nডাক্তার দেখাতে চাই" }, color: "green" },
          { jp: "保険証があります", tr: { vi: "Tôi có thẻ bảo hiểm", id: "Saya punya kartu asuransi", en: "I have my insurance card", bn: "বীমা কার্ড আছে" }, color: "green" },
          { jp: "保険証を忘れました", tr: { vi: "Tôi quên thẻ bảo hiểm", id: "Saya lupa kartu asuransi", en: "I forgot my insurance card.", bn: "বীমা কার্ড ভুলে এসেছি" }, color: "amber" },
          { jp: "日本語がわかりません", tr: { vi: "Tôi không hiểu tiếng Nhật", id: "Tidak mengerti bahasa Jepang", en: "I don't understand Japanese.", bn: "জাপানি বুঝি না" }, color: "amber" },
          { jp: "処方箋があります\n薬をお願いします", tr: { vi: "Có đơn thuốc\nXin thuốc", id: "Punya resep\nMinta obat", en: "I have a prescription.\nPlease give me the medicine.", bn: "প্রেসক্রিপশন আছে\nওষুধ দিন" }, color: "green" },
        ]},
      ]
    },
    {
      id: "absence", cat: "work", icon: "📞",
      title: { ja: "遅刻・欠勤連絡", vi: "Báo đi muộn / vắng mặt", id: "Lapor terlambat / absen", en: "Late / Absence Notice", bn: "দেরি/অনুপস্থিতির বিজ্ঞপ্তি" },
      sections: [
        { label: { ja: "電話で使う", vi: "Dùng khi gọi điện", id: "Gunakan saat menelepon", en: "Use on the phone", bn: "ফোনে ব্যবহার করুন" }, items: [
          { jp: "○○です。今日\n遅刻します", tr: { vi: "Tôi là ○○. Hôm nay\ntôi sẽ đi muộn", id: "Saya ○○. Hari ini\nsaya akan terlambat", en: "This is ○○. I will be\nlate today.", bn: "আমি ○○। আজ\nদেরি হবে" }, color: "amber" },
          { jp: "○○です。体調が悪く\n今日休みます", tr: { vi: "Tôi là ○○. Tôi bị bệnh\nvà nghỉ hôm nay", id: "Saya ○○. Saya sakit\ndan absen hari ini", en: "This is ○○. I'm sick\nand absent today.", bn: "আমি ○○। অসুস্থ\nআজ কাজে আসতে পারব না" }, color: "red" },
          { jp: "電車が遅れています\n○○分遅刻します", tr: { vi: "Tàu điện bị trễ\nTôi sẽ muộn ○○ phút", id: "Kereta terlambat\nSaya terlambat ○○ menit", en: "The train is delayed.\nAbout ○○ minutes late.", bn: "ট্রেন দেরি হচ্ছে\n○○ মিনিট দেরি হবে" }, color: "amber" },
          { jp: "よろしく\nお願いします", tr: { vi: "Xin hãy thông cảm", id: "Mohon\npengertiannya", en: "Thank you.", bn: "ধন্যবাদ\nঅনুগ্রহ করে বুঝুন" }, color: "green" },
        ]},
      ]
    },
    {
      id: "cityhall", cat: "life", icon: "🏛️",
      title: { ja: "役所・銀行", vi: "Cơ quan hành chính / Ngân hàng", id: "Kantor pemerintah / Bank", en: "City Hall / Bank", bn: "সরকারি অফিস/ব্যাংক" },
      sections: [
        { label: { ja: "役所・銀行で見せる", vi: "Cho xem tại cơ quan / ngân hàng", id: "Tunjukkan di kantor / bank", en: "Show at city hall / bank", bn: "অফিস/ব্যাংকে দেখান" }, items: [
          { jp: "転入届を出したいです", tr: { vi: "Muốn nộp đơn đăng ký chuyển đến", id: "Ingin mengajukan pendaftaran pindah", en: "I need to register my move.", bn: "বাসস্থান পরিবর্তন নিবন্ধন করতে চাই" }, color: "green" },
          { jp: "マイナンバーカードを\n作りたいです", tr: { vi: "Muốn làm thẻ My Number", id: "Ingin membuat kartu My Number", en: "I need a My Number card.", bn: "মাই নম্বর কার্ড বানাতে চাই" }, color: "green" },
          { jp: "日本語がわかりません\n通訳はいますか？", tr: { vi: "Không hiểu tiếng Nhật\nCó phiên dịch không?", id: "Tidak mengerti Jepang\nAda penerjemah?", en: "I don't understand Japanese.\nIs there an interpreter?", bn: "জাপানি বুঝি না\nদোভাষী আছেন?" }, color: "amber" },
          { jp: "口座を開きたいです", tr: { vi: "Muốn mở tài khoản", id: "Ingin membuka rekening", en: "I need to open an account.", bn: "অ্যাকাউন্ট খুলতে চাই" }, color: "green" },
          { jp: "海外にお金を送りたいです", tr: { vi: "Muốn gửi tiền ra nước ngoài", id: "Ingin mengirim uang ke luar negeri", en: "I need to send money overseas.", bn: "বিদেশে টাকা পাঠাতে চাই" }, color: "green" },
        ]},
      ]
    },
    {
      id: "supermarket", cat: "life", icon: "🛒",
      title: { ja: "スーパー・買い物", vi: "Siêu thị / Mua sắm", id: "Supermarket / Belanja", en: "Supermarket / Shopping", bn: "সুপারমার্কেট/কেনাকাটা" },
      sections: [
        { label: { ja: "店員に見せる", vi: "Cho nhân viên xem", id: "Tunjukkan ke pegawai", en: "Show to staff", bn: "কর্মীকে দেখান" }, items: [
          { jp: "これはどこにありますか？", tr: { vi: "Cái này ở đâu ạ?", id: "Di mana ini?", en: "Where is this?", bn: "এটা কোথায় আছে?" }, color: "green" },
          { jp: "袋をください", tr: { vi: "Cho tôi một túi", id: "Tolong berikan kantong", en: "Please give me a bag.", bn: "একটা ব্যাগ দিন" }, color: "green" },
          { jp: "ポイントカードがあります", tr: { vi: "Tôi có thẻ tích điểm", id: "Saya punya kartu poin", en: "I have a point card.", bn: "পয়েন্ট কার্ড আছে" }, color: "green" },
          { jp: "セルフレジの使い方を\n教えてください", tr: { vi: "Xin hướng dẫn dùng\nmáy tự phục vụ", id: "Tolong ajarkan cara\nkasir mandiri", en: "How do I use\nthe self-checkout?", bn: "সেলফ চেকআউট কীভাবে\nব্যবহার করবেন শেখান" }, color: "amber" },
        ]},
      ]
    },
      {
      id: "religion", cat: "religion", icon: "🍱",
      title: { ja: "食事・宗教の配慮", vi: "Chế độ ăn uống", id: "Diet / Agama", en: "Diet / Religion", bn: "খাদ্য / ধর্ম" },
      sections: [
        { label: { ja: "食べられないものを伝える", vi: "Nói về thứ không ăn được", id: "Makanan yang tidak bisa dimakan", en: "Tell them what you cannot eat", bn: "কী খেতে পারেন না বলুন" }, items: [
          { jp: "豚肉は食べられません", tr: { vi: "Tôi không ăn thịt lợn", id: "Saya tidak makan daging babi", en: "I can't eat pork.", bn: "আমি শুয়োরের মাংস খাই না" }, color: "amber" },
          { jp: "アルコールは飲めません", tr: { vi: "Tôi không uống rượu", id: "Saya tidak minum alkohol", en: "I don't drink alcohol.", bn: "আমি মদ পান করি না" }, color: "amber" },
          { jp: "ハラール食を希望します", tr: { vi: "Tôi cần thức ăn Halal", id: "Saya perlu makanan Halal", en: "I need Halal food.", bn: "আমার হালাল খাবার দরকার" }, color: "amber" },
          { jp: "牛肉は食べられません", tr: { vi: "Tôi không ăn thịt bò", id: "Saya tidak makan daging sapi", en: "I can't eat beef.", bn: "আমি গরুর মাংস খাই না" }, color: "amber" },
          { jp: "肉類は食べません", tr: { vi: "Tôi không ăn thịt", id: "Saya tidak makan daging", en: "I don't eat meat.", bn: "আমি মাংস খাই না" }, color: "green" },
          { jp: "アレルギーがあります", tr: { vi: "Tôi bị dị ứng", id: "Saya punya alergi", en: "I have allergies.", bn: "আমার অ্যালার্জি আছে" }, color: "red" },
        ]},
        { label: { ja: "礼拝について", vi: "Về việc cầu nguyện", id: "Tentang sholat", en: "About prayer", bn: "নামাজ সম্পর্কে" }, items: [
          { jp: "お祈りの時間が必要です", tr: { vi: "Tôi cần thời gian cầu nguyện", id: "Saya perlu waktu sholat", en: "I need time to pray.", bn: "আমার নামাজের সময় দরকার" }, color: "green" },
          { jp: "お祈りできる場所を\n教えてください", tr: { vi: "Xin chỉ nơi có thể cầu nguyện", id: "Tolong tunjukkan tempat sholat", en: "Please show me a place to pray.", bn: "নামাজ পড়ার জায়গা দেখান" }, color: "green" },
          { jp: "断食中です（ラマダン）", tr: { vi: "Tôi đang nhịn ăn (Ramadan)", id: "Saya sedang puasa (Ramadan)", en: "I'm fasting. (Ramadan)", bn: "আমি রোজা রাখছি (রমজান)" }, color: "amber" },
        ]},
      ]
    },
  ],

  // ========== 現場メモ ==========
  genba: [
    {
      id: "basic", cat: "genba", icon: "🏭",
      title: { ja: "現場で使うフレーズ", vi: "Cụm từ tại hiện trường", id: "Frasa di lapangan", en: "Field phrases", bn: "কাজের মাঠে বাক্য" },
      items: [
        { ja: "わかりません", vi: "Tôi không hiểu", id: "Saya tidak mengerti", en: "I don't understand.", bn: "বুঝি না", kana: "わかりません" },
        { ja: "もう一度お願いします", vi: "Xin hãy làm lại một lần nữa", id: "Tolong lakukan sekali lagi", en: "Please do it again.", bn: "আবার করুন দয়া করে", kana: "もういちどおねがいします" },
        { ja: "終わりました", vi: "Đã xong", id: "Sudah selesai", en: "I'm done.", bn: "শেষ হয়েছে", kana: "おわりました" },
        { ja: "危ないです", vi: "Nguy hiểm", id: "Berbahaya", en: "It's dangerous!", bn: "বিপজ্জনক", kana: "あぶないです" },
        { ja: "不良です", vi: "Hàng lỗi", id: "Ini cacat", en: "This is defective.", bn: "এটা ত্রুটিপূর্ণ", kana: "ふりょうです" },
      ]
    },
  ],

  // ========== ルール・カード ==========
  card: [
    {
      id: "rules_basic", cat: "rules", icon: "📋",
      title: { ja: "基本ルール", vi: "Quy tắc cơ bản", id: "Aturan dasar", en: "Basic Rules", bn: "মৌলিক নিয়ম" },
      items: [
        { jp: "遅刻・欠勤は必ず事前に連絡する\n無断欠勤は厳禁", tr: { vi: "Luôn báo trước khi đi muộn hoặc vắng mặt\nNghiêm cấm vắng mặt không báo", id: "Selalu beritahu sebelum terlambat atau absen\nDilarang keras absen tanpa pemberitahuan", en: "Always notify before being late/absent\nUnexcused absence strictly prohibited", bn: "দেরি/অনুপস্থিতির আগেই সবসময় জানাবেন\nবিনা নোটিশে অনুপস্থিতি কঠোরভাবে নিষিদ্ধ" }, note: null },
        { jp: "飲酒しての出勤・作業は禁止\n→ 即解雇の対象", tr: { vi: "Cấm đến làm việc hoặc làm việc khi say\n→ Sa thải ngay", id: "Dilarang bekerja dalam keadaan mabuk\n→ Pemecatan segera", en: "No working while drunk\n→ Immediate dismissal", bn: "মদ্যপ অবস্থায় কাজ নিষিদ্ধ\n→ তাৎক্ষণিক বরখাস্ত" }, note: null },
        { jp: "作業中はスマホ使用禁止\n清潔感のある服装で出勤する", tr: { vi: "Cấm dùng điện thoại khi làm việc\nĐến làm việc với trang phục sạch sẽ", id: "Dilarang pakai ponsel saat bekerja\nHadir dengan pakaian bersih", en: "No smartphone during work\nCome in clean neat clothing", bn: "কাজের সময় স্মার্টফোন নিষিদ্ধ\nপরিষ্কার পোশাকে কাজে আসুন" }, note: null },
      ]
    },
    {
      id: "security", cat: "rules", icon: "🔒",
      title: { ja: "情報・コンプライアンス", vi: "Thông tin / Tuân thủ", id: "Informasi / Kepatuhan", en: "Info / Compliance", bn: "তথ্য/কমপ্লায়েন্স" },
      items: [
        { jp: "職場・製品の写真をSNSに投稿しない\n→ 法的責任を問われる場合あり", tr: { vi: "Không đăng ảnh nơi làm việc/sản phẩm lên MXH\n→ Có thể bị truy cứu pháp lý", id: "Jangan posting foto tempat kerja di medsos\n→ Dapat dikenai tanggung jawab hukum", en: "Don't post workplace photos on SNS\n→ May result in legal liability", bn: "কর্মক্ষেত্রের ছবি সোশ্যাল মিডিয়ায় নয়\n→ আইনি দায় হতে পারে" }, note: null },
        { jp: "ハラスメント・差別は絶対禁止\nパワハラ・セクハラ・いじめすべて禁止", tr: { vi: "Tuyệt đối cấm quấy rối và phân biệt đối xử", id: "Pelecehan dan diskriminasi sama sekali dilarang", en: "Harassment & discrimination absolutely prohibited", bn: "হয়রানি ও বৈষম্য সম্পূর্ণ নিষিদ্ধ" }, note: null },
      ]
    },
    {
      id: "garbage_rules", cat: "life", icon: "🗑️",
      title: { ja: "ゴミ出しのルール", vi: "Quy tắc đổ rác", id: "Aturan buang sampah", en: "Garbage Rules", bn: "ময়লা ফেলার নিয়ম" },
      items: [
        { jp: "種類ごとに分ける\n燃えるゴミ・燃えないゴミ・資源ゴミ", tr: { vi: "Phân loại: cháy / không cháy / tái chế", id: "Pisahkan: mudah terbakar / tidak / daur ulang", en: "Separate: burnable / non-burnable / recyclable", bn: "আলাদা করুন: পোড়ানো যায়/যায় না/রিসাইকেল" }, note: null },
        { jp: "収集日の朝8時までに出す\n前日の夜は出さないこと", tr: { vi: "Trước 8 giờ sáng ngày thu gom\nKhông đổ tối hôm trước", id: "Sebelum jam 8 pagi hari pengangkutan\nJangan malam sebelumnya", en: "By 8am on collection day\nNot the night before", bn: "সকাল ৮টার আগে রাখুন\nআগের রাতে রাখবেন না" }, note: null },
      ]
    },
    {
      id: "bicycle", cat: "life", icon: "🚲",
      title: { ja: "自転車ルール（法律）", vi: "Luật xe đạp", id: "Aturan sepeda (hukum)", en: "Bicycle Laws", bn: "সাইকেল আইন" },
      items: [
        { jp: "飲酒運転は禁止\n（懲役5年・罰金100万円）\n2024年11月から罰則強化", tr: { vi: "Cấm lái xe khi say\n(Tù 5 năm / 1 triệu yên)\nTăng cường từ 11/2024", id: "Dilarang berkendara mabuk\n(5 tahun / 1 juta yen)\nDiperketat November 2024", en: "No drunk cycling\n(5 yrs / ¥1M fine)\nStrengthened Nov 2024", bn: "মদ্যপ সাইকেল নিষিদ্ধ\n(৫ বছর/১০ লাখ ইয়েন)\nনভেম্বর ২০২৪ থেকে কঠোর" }, note: null },
        { jp: "スマホ・イヤホンしながら運転禁止\n（懲役6か月・罰金10万円）", tr: { vi: "Cấm dùng điện thoại/tai nghe khi đi xe\n(6 tháng / 100.000 yên)", id: "Dilarang ponsel/earphone saat berkendara\n(6 bulan / 100.000 yen)", en: "No phone/earphone while cycling\n(6 months / ¥100K)", bn: "ফোন/ইয়ারফোন সহ সাইকেল নিষিদ্ধ\n(৬ মাস/১ লাখ ইয়েন)" }, note: null },
        { jp: "夜間はライトを点灯\nヘルメット着用（努力義務）", tr: { vi: "Bật đèn ban đêm\nĐội mũ bảo hiểm (nỗ lực)", id: "Nyalakan lampu malam\nPakai helm (upaya)", en: "Lights on at night\nWear helmet (effort)", bn: "রাতে লাইট জ্বালুন\nহেলমেট পরুন (প্রচেষ্টা)" }, note: null },
      ]
    },
    {
      id: "noise", cat: "life", icon: "🔊",
      title: { ja: "近隣マナー", vi: "Phép lịch sự với hàng xóm", id: "Tata krama bertetangga", en: "Neighbor Manners", bn: "প্রতিবেশী আচরণ" },
      items: [
        { jp: "夜10時以降は静かにする\n音楽・テレビ・会話の音量を下げる", tr: { vi: "Yên lặng sau 10 giờ tối\nGiảm âm lượng nhạc, TV, tiếng nói", id: "Tenang setelah jam 10\nKecilkan volume musik, TV", en: "Quiet after 10pm\nLower music, TV, conversation", bn: "রাত ১০টার পর চুপ\nসঙ্গীত/টিভি কমান" }, note: null },
      ]
    },
    {
      id: "custom", cat: "custom", icon: "⚙️",
      title: { ja: "会社・現場のルール（カスタム）", vi: "Nội quy công ty / hiện trường", id: "Aturan perusahaan / lokasi", en: "Company / Site Rules", bn: "কোম্পানি/সাইটের নিয়ম" },
      items: [
        { jp: "御社のルールをここに追加できます\nお問い合わせ：トクシントラスト 羽根\n080-8374-1036", tr: { vi: "Có thể thêm nội quy công ty vào đây\nLiên hệ: Tokushin Trust - Hane\n080-8374-1036", id: "Peraturan perusahaan dapat ditambahkan\nHubungi: Tokushin Trust - Hane\n080-8374-1036", en: "Your company rules can be added here\nContact: Tokushin Trust - Hane\n080-8374-1036", bn: "কোম্পানির নিয়ম যোগ করা যাবে\nযোগাযোগ: Tokushin Trust - Hane\n080-8374-1036" }, note: null },
      ]
    },
  ]
};
