# ❄️ 혹한기 요새: 30일의 생존 (Frost Fortress: 30 Days)

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/vanilla-javascript-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![Canvas 2D](https://img.shields.io/badge/HTML5-Canvas%202D-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[![Web Audio API](https://img.shields.io/badge/Audio-Web%20Audio%20API-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![Zero External Dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg)]()

> **'Frostpunk'의 극한 열기 생존**과 **'Kingdom Two Crowns'의 직관적인 요새 방벽 디펜스**를 융합한 시뮬레이션 게임입니다.  
> 외부 라이브러리나 이미지/오디오 에셋 없이, **단 하나의 `.html` 파일**로 브라우저에서 30일간의 긴장감 넘치는 생존 캠페인을 제공합니다.

---

## 🎮 라이브 데모 (Live Demo)
👉 **[게임 플레이하기 (Live Demo)](https://jeiel85.github.io/frost-fortress-30days/)**

---

## 🌟 주요 게임 시스템 및 특징

### 1. 낮/밤 30일 생존 루프 (Day / Night Cycle Loop)
- **☀️ 낮 단계 (건설 & 채굴)**:
  - 기온이 비교적 안정된 낮 동안 목재, 석재, 석탄을 채굴하고 방어벽과 타워를 배치합니다.
  - 온실을 통해 식량을 비축하고, 중앙 열기 발전기 코어를 정비합니다.
- **🌙 밤 단계 (혹한기 공성 방어)**:
  - 기온이 급강하하며 긴급 사이렌과 함께 동토의 서리 괴수들이 침공합니다.
  - 성벽에 배치된 수호병, 장거리 발리스타 타워, 화염 방사탑이 자동 교전을 수행합니다.
  - 공병들이 실시간으로 파손된 성벽을 수리합니다.

### 2. 기지 건설 및 11종 건물 인프라 (Base Building)
1. **🔥 중앙 열기 발전기 코어 (Central Thermal Core)**: 요새의 심장. 열기 반경 제공 및 비상 **열기 과부하(Overdrive)** 파동 방출.
2. **🧱 방어 성벽 (Walls)**: 괴수의 진입을 차단하고 수호병이 배치되어 사격. T2 석조벽 / T3 강철 요새벽으로 업그레이드 가능.
3. **🏹 발리스타 탑 (Ballista Tower)**: 장거리 단일 관통 화살로 거대 괴수 저격.
4. **🔥 화염 방사탑 (Flamethrower Tower)**: 원뿔형 화염 방사로 무리 괴수 소각 및 주변 보온.
5. **⛺ 방한 숙소 (Warm Shelter)**: 시민 수용 한도 증가 및 수면 중 동사 방지.
6. **🌱 수경 온실 (Greenhouse)**: 열기 반경 내에서 매일 안정적인 식량 생산.
7. **⛏️ 석탄 추출기 (Coal Extractor)**: 열기 코어의 연료가 되는 석탄 지속 채굴.
8. **🪓 벌목 제재소 (Sawmill)**: 얼어붙은 침엽수를 벌목하여 건설용 목재 공급.
9. **🪨 채석장 (Quarry)**: 요새 성벽 강화에 필요한 석재 채굴.
10. **⚔️ 수호 훈련소 (Barracks)**: 수호병의 공격력, 사거리 증대 및 정예 방패병 양성.
11. **🛠️ 공병 수리소 (Repair Workshop)**: 공병 수리 효율 극대화 및 나노 증기 복구 지원.
12. **🏥 야전 의무실 (Infirmary)**: 동상 및 부상자 치료, 사기(Morale) 유지.

### 3. 시민 할당 및 생존 파라미터 (Population & Morale)
- **👷 일꾼 (Workers)**: 자원 채굴 및 온실 식량 수급 증대
- **🔧 공병 (Engineers)**: 밤 동안 파손된 방어 성벽 실시간 긴급 수리
- **🏹 수호병 (Soldiers)**: 성벽 위에서 화살 및 탄환으로 괴수 요격
- **사기 (Morale 0~100%)**: 혹한, 기아, 사망자 발생 시 사기 급락. 0% 도달 시 폭동으로 요새 붕괴

### 4. 10일 주기 보스 & 최종 재앙 (Crisis Waves)
- **Day 10**: `서리 골리앗 (Frost Colossus)` - 거대한 빙하 바위 투척
- **Day 20**: `빙하 베히모스 (Glacial Behemoth)` - 성벽 돌진 분쇄 및 타워 동결
- **Day 30**: `절대영도의 군주 & 백색 한파 (Lord of Frost & The Final Whiteout)` - -85°C 극저온과 전방위 종말 총공세

### 5. 완벽한 시청각 연출 (Pure Canvas 2D & Web Audio API)
- **동적 열기 조명 시스템**: 열기 코어의 주황빛 온기 vs 야간의 차가운 딥블루 안개 비네팅
- **입체 파티클 시스템**: 풍향에 휘날리는 눈보라 파티클, 코어의 불티, 타격 파편
- **100% 프로시저 사운드 합성**:
  - 눈보라 바람 앰비언스 (핑크 노이즈 필터링)
  - 야간 공습 경보 사이렌 (듀얼 오실레이터)
  - 발리스타 발사음, 성벽 수리 망치음, 묵직한 포격 폭발음, 여명 나팔소리

### 6. 편의 기능 & 세이브 시스템
- **배속 조절**: ⏸️ 일시정지, ▶ 1배속, ⏩ 2배속, ⏭️ 5배속
- **LocalStorage 일차별 자동 저장**: 매일 아침 및 수동 저장/불러오기 지원
- **단축키**: `Space` (일시정지), `1`/`2`/`3` (배속), `ESC` (선택 취소)

---

## 🛠️ 조작 가이드 (Controls)

| 조작 | 기능 |
|---|---|
| **마우스 좌클릭** | 건물 선택 / 건설 위치 지정 |
| **마우스 우클릭 / ESC** | 건설 및 선택 취소 |
| **Space** | 게임 일시정지 / 재개 |
| **1 / 2 / 3** | 1배속 / 2배속 / 5배속 전환 |
| **🔥 열기 과부하 버튼** | 코어 과부하 가동 (석탄 2배 소모, 반경 50% 확대 및 열기 충격파) |
| **⏩ 페이즈 스킵 버튼** | 낮/밤 페이즈를 즉시 전환 |

---

## 💻 실행 방법 (How to Run)

외부 빌드 도구나 Node.js 의존성 없이, 브라우저에서 `index.html` 파일을 더블 클릭하기만 하면 즉시 실행됩니다.

```bash
# 로컬에서 실행 시
open index.html
# 또는
start index.html
```

---

## 📜 라이선스 (License)
MIT License
