# Scentive - 감정 기반 향기 추천 시각화

오늘 하루를 기록하면, 당신의 감정에 어울리는 향이 됩니다.

## 소개

Scentive는 사용자가 작성한 일기에서 감정을 추출하고, 그 감정에 가장 어울리는 향료(ingredient)를 추천해주는 인터랙티브 시각화 서비스입니다.

## 작동 흐름

| 단계 | 설명 |
|------|------|
| **Step 01 — Emotion Extraction** | GPT-4o가 일기에서 긍정/부정 감정 키워드를 추출합니다 |
| **Step 02 — Anchor Matching** | 추출된 감정을 480개의 향기 Anchor(accord)에 매칭합니다 |
| **Step 03 — Ingredient Matching** | 2387개의 향료 데이터베이스에서 최적의 향료를 찾습니다 |
| **Step 04 — Translation** | 화학 향료명을 사람이 이해할 수 있는 향기 언어로 번역합니다 |

## 기술 스택

- **Frontend**: HTML, CSS, Canvas API (Single Page)
- **Backend API**: 자체 감정-향기 매칭 모델 (GPT + Custom Model)
- **Visualization**: Canvas 기반 파티클 애니메이션

## 사용 방법

1. 텍스트 입력란에 오늘의 일기를 작성합니다
2. "향기 분석 시작" 버튼을 클릭합니다
3. 각 단계별 시각화를 감상하며 "다음 단계" 버튼으로 진행합니다
4. 최종적으로 당신의 감정에 어울리는 향료와 향기 설명을 확인합니다

## API

- **Endpoint**: `POST /scent`
- **Input**: 일기 텍스트 (diary)
- **Output**: 감정 키워드, 매칭된 accord, 추천 향료(ingredient), 향기 설명(human_description), 노트(note)
