// 샘플 숙소 데이터
const rooms = [
    {
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
      ],
      title: "한국 Hwacheon-myeon, Hongcheon-gun",
      rating: 4.88,
      distance: "86km 거리",
      date: "4월 20일~25일",
      price: "₩114,118 /박"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80"
      ],
      title: "게스트 선호 한옥",
      rating: 4.95,
      distance: "120km 거리",
      date: "5월 1일~5일",
      price: "₩98,000 /박"
    }
  ];
  
  // 숙소 카드 렌더링
  function renderRooms() {
    const list = document.getElementById('roomList');
    list.innerHTML = '';
    rooms.forEach((room, idx) => {
      list.innerHTML += `
        <div class="room-card">
          <div class="room-img-wrap" data-idx="${idx}">
            <img class="room-img" src="${room.images[0]}" alt="숙소 이미지">
            <div class="img-dots">
              ${room.images.map((_,i)=>`<div class="img-dot${i===0?' active':''}"></div>`).join('')}
            </div>
          </div>
          <div class="room-info">
            <div class="room-title">
              ${room.title}
              <span class="room-rating">★ ${room.rating}</span>
            </div>
            <div class="room-desc">${room.distance}</div>
            <div class="room-date">${room.date}</div>
            <div class="room-price">${room.price}</div>
          </div>
        </div>
      `;
    });
  }
  renderRooms();
  
  // 이미지 슬라이드 (클릭시 이미지 전환)
  document.addEventListener('click', function(e) {
    const wrap = e.target.closest('.room-img-wrap');
    if (!wrap) return;
    const idx = +wrap.dataset.idx;
    const img = wrap.querySelector('.room-img');
    const dots = wrap.querySelectorAll('.img-dot');
    let cur = 0;
    dots.forEach((d,i)=>{ if(d.classList.contains('active')) cur=i; });
    const next = (cur+1)%rooms[idx].images.length;
    img.src = rooms[idx].images[next];
    dots.forEach((d,i)=>d.classList.toggle('active',i===next));
  });
  
  // 카테고리 탭 선택
  document.getElementById('categoryTabs').addEventListener('click', function(e){
    const tab = e.target.closest('.category-tab');
    if (!tab) return;
    document.querySelectorAll('.category-tab').forEach(t=>t.classList.remove('selected'));
    tab.classList.add('selected');
  });
  
  // 하단 네비게이션 선택
  document.querySelectorAll('.nav-item').forEach((item, i, arr) => {
    item.addEventListener('click', () => {
      arr.forEach(t=>t.classList.remove('selected'));
      item.classList.add('selected');
    });
  });
  
  // 지도 표시 버튼 클릭 이벤트 (예시)
  document.getElementById('mapFab').addEventListener('click', function() {
    alert('지도 화면으로 이동합니다!');
  });
  