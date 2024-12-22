import React from 'react'
import { Box, Container, Link, List, ListItem, Text } from '@chakra-ui/react'

interface PrivacyPolicyTemplateProps {}

export const PrivacyPolicyTemplate: React.FC<
  PrivacyPolicyTemplateProps
> = ({}) => {
  return (
    <Box w='full' bg='gray.100' pb={'64px'}>
      <Container py={10} px={6} bg='white' maxW='450px' h={'full'}>
        <Box>
          {/* Title */}
          <Text as={'h1'} textStyle={'h1'}>
            비어랏 개인정보 처리방침
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotLinkSemanticTag />은 「개인정보 보호법」 제30조에 따라
            정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게
            처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
            수립·공개합니다.
          </Text>
          <Text textStyle='h4' mb={4} textColor={'blue.400'}>
            이 개인정보처리방침은 2024년 8월 18일부터 적용됩니다.
          </Text>

          {/* 제1조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제1조(개인정보의 처리 목적)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 다음의 목적을 위하여 개인정보를 처리합니다.
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며
            이용 목적이 변경되는 경우에는 사전 동의를 구할 것입니다.
          </Text>
          <List spacing={3} pl={6}>
            <ListItem textStyle='h4'>
              1. <strong>홈페이지 회원가입 및 관리</strong>: 회원 가입의사 확인,
              회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리,
              서비스 부정이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를
              처리합니다.
            </ListItem>
            <ListItem textStyle='h4'>
              2. <strong>재화 또는 서비스 제공</strong>: 서비스 제공, 콘텐츠
              제공, 맞춤서비스 제공, 본인인증, 연령인증을 목적으로 개인정보를
              처리합니다.
            </ListItem>
            <ListItem textStyle='h4'>
              3. <strong>마케팅 및 광고에의 활용</strong>: 신규 서비스(제품)
              개발 및 맞춤 서비스 제공, 인구통계학적 특성에 따른 서비스 제공 및
              광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스
              이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
            </ListItem>
          </List>

          {/* 제2조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제2조(개인정보의 처리 및 보유 기간)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 회원이 탈퇴를 요청하거나 개인정보 수집 및
            이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
          </Text>
          <Text textStyle='h4' mb={4}>
            단, 불량 이용자 제재나 관련 분쟁 처리 등 서비스 관리를 위한 목적으로{' '}
            <BeerlotSemanticTag /> 내부방침이나 관계법령의 규정에 의하여 보존할
            필요가 있는 경우에는 일정 기간 동안 개인정보를 보관할 수 있습니다.
            개인 정보 수집 목적 달성 시에도 불구하고 즉시 파기하지 않는 경우는
            다음과 같습니다.
          </Text>
          <List spacing={3} pl={6}>
            <ListItem textStyle='h4'>
              ① 홈페이지 회원가입 및 관리: 수집, 이용에 관한 동의일로부터 회원
              탈퇴시까지 보유, 이용됩니다.
              <br />- 보유근거 : 회원 관리, 부정가입 방지, 민원 등 처리 목적
            </ListItem>
            <ListItem textStyle='h4'>
              ② 재화 또는 서비스 제공: 수집, 이용에 관한 동의일로부터 회원
              탈퇴시까지 보유, 이용됩니다.
              <br />- 보유근거 : 맞춤 서비스 제공
            </ListItem>
            <ListItem textStyle='h4'>
              ③ 마케팅 및 광고에의 활용: 수집, 이용에 관한 동의일로부터 회원
              탈퇴시까지 보유, 이용됩니다.
              <br />- 보유근거 : 맞춤 서비스 제공
            </ListItem>
            <ListItem textStyle='h4'>
              ④ 관련법령 기준에 따라 별도 보관하는 경우
              <br />
              - 전자금융거래에 관한 기록: 5년
              <br />
              - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록: 5년
              <br />
              - 소비자 불만 또는 분쟁처리에 관한 기록: 3년
              <br />
              - 표시/광고에 관한 기록: 6개월
              <br />- 웹사이트 방문 기록: 3개월
            </ListItem>
          </List>

          {/* 제3조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제3조(처리하는 개인정보의 항목 및 수집방법)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 다음의 개인정보 항목을 처리하고 있습니다.
            <br />
            소셜 로그인을 통한 회원 가입 시 사용한 본인 명의의 소셜 미디어
            아이디(혹은 이메일 주소 형식의 아이디)와 성명(혹은 별명), 프로필
            이미지, 소셜 로그인 생성 번호.
          </Text>
          <List spacing={3} pl={6}>
            <ListItem textStyle='h4'>
              ① 회원가입 시점에 <BeerlotSemanticTag />이 이용자로부터 수집하는
              개인정보는 아래와 같습니다.
            </ListItem>
            <ListItem textStyle='h4'>
              - 네이버 간편 가입 시: <strong>필수 항목</strong>: 이메일,{' '}
              <strong>선택 항목</strong>: 프로필 사진
            </ListItem>
            <ListItem textStyle='h4'>
              - 카카오 간편 가입 시: <strong>필수 항목</strong>: 이메일,{' '}
              <strong>선택 항목</strong>: 닉네임, 프로필 사진
            </ListItem>
            <ListItem textStyle='h4'>
              - 구글 간편 가입 시: <strong>필수 항목</strong>: 이메일, 이름,
              프로필 사진
            </ListItem>
            <ListItem textStyle='h4'>
              ② 모바일 서비스 특성상 단말기 정보(모델, 이동통신사, 하드웨어 ID,
              기본 통계)가 수집될 수 있습니다. <BeerlotSemanticTag />은 수집된
              단말기 정보로 특정 개인을 식별하지 않습니다.
            </ListItem>
            <ListItem textStyle='h4'>
              ③ 내용 이외에 추가적인 개인정보 수집이 필요한 경우,{' '}
              <BeerlotSemanticTag />은 회원에게 사전에 이러한 사실을 고지하고
              동의를 받으며, 사전 고지 후 동의를 받은 회원에 한해서만 정보를
              수집합니다.
            </ListItem>
          </List>
          <Text textStyle='h4' mt={6} mb={4}>
            <BeerlotSemanticTag />은 서비스 제공을 위해 다음과 같은 방법으로
            개인정보를 수집합니다.
          </Text>
          <List spacing={3} pl={6}>
            <ListItem textStyle='h4'>
              ① 서비스의 회원가입 및 이용 과정에서 이용자로부터 직접 수집
            </ListItem>
            <ListItem textStyle='h4'>② 생성 정보 수집 툴을 통한 수집</ListItem>
          </List>

          {/* 제4조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제4조(개인정보의 제3자 제공에 관한 사항)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 개인정보를 제1조(개인정보의 처리 목적)에서
            명시한 범위 내에서만 처리하며, 제3자의 서비스가 연결되어 제공되는
            경우, 이용자의 동의를 얻은 후에 법률의 특별한 규정 등 「개인정보
            보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게
            제공합니다.
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 다음과 같이 개인정보를 제3자에게 제공하고
            있습니다. <br />
            <strong>해당 없음</strong>
          </Text>

          {/* 제5조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제5조(개인정보의 처리 위탁 및 국외 이전)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 원활한 개인정보 업무처리를 위하여 다음과
            같이 개인정보 처리업무를 위탁하고 있으며, 위탁받은 업체가 관련법령에
            따라 개인정보를 안전하게 처리하도록 필요한 사항을 규정하고 관리
            감독하고 있습니다.
          </Text>
          <List spacing={3} pl={6}>
            <ListItem textStyle='h4'>
              ① 데이터 보관 및 시스템 운영
              <br />- 수탁업체: Google Cloud Service (대한민국 서울 Region)
              <br />- 위탁 업무 내용: 서비스 제공을 위한 데이터 보관 및 시스템
              운영
              <br />- 개인정보 항목: 서비스 제공 과정에서 수집한 모든 개인정보
              <br />- 개인정보 이전일시: 서비스 이용을 위한 필요 정보 입력 시
              <br />- 개인정보 이전방법: Google Cloud 컴퓨팅 환경에 개인정보
              보관
              <br />- 개인정보 보유, 이용기간: 회원 탈퇴 또는 개인정보 유효기간
              도래 시까지 보관
            </ListItem>
          </List>

          {/* 제6조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제6조(개인정보의 파기절차 및 파기방법)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag /> 은 개인정보 보유기간의 경과, 처리목적 달성 등
            개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
            파기합니다.
          </Text>
          <Text as='h5' textStyle='h4_bold' mb={2}>
            파기절차
          </Text>
          <Text textStyle='h4' mb={4}>
            ① 이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의
            DB로 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에
            의한 정보보호 사유에 따라(개인정보의 처리 및 보유 기간 참조) 일정
            기간 저장된 후 파기됩니다.
            <br />② 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는
            다른 목적으로 이용되지 않습니다.
          </Text>
          <Text as='h5' textStyle='h4_bold' mb={2}>
            파기방법
          </Text>
          <Text textStyle='h4' mb={4}>
            ① 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
            사용합니다.
            <br />② 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
            파기합니다.
          </Text>

          {/* 제7조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제7조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)
          </Text>
          <Text textStyle='h4' mb={4}>
            정보주체는 <BeerlotSemanticTag />에 대해 언제든지 개인정보
            열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
            <br />
            제1항에 따른 권리 행사는 <BeerlotSemanticTag />에 대해 「개인정보
            보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX)
            등을 통하여 하실 수 있으며 <BeerlotSemanticTag />은 이에 대해 지체
            없이 조치하겠습니다.
            <br />
            제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
            대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한
            고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야
            합니다.
            <br />
            개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항,
            제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
            <br />
            개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
            대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
            <br />
            <BeerlotSemanticTag />은 정보주체 권리에 따른 열람의 요구,
            정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가
            본인이거나 정당한 대리인인지를 확인합니다.
          </Text>

          {/* 제8조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제8조 (서비스 이용자의 스마트폰 내 정보 및 기능에 대한 접근권한에
            관한 사항)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 회원에게 사전에 고지하고 동의를 받아 아래의
            정보를 수집할 수 있습니다.
          </Text>
          <List spacing={3} pl={6}>
            <ListItem textStyle='h4'>
              • 접근권한이 필요한 정보 및 기능의 항목: 사진 등 미디어, 카메라,
              파일 저장 공간
            </ListItem>
            <ListItem textStyle='h4'>
              • 해당 정보 및 기능에 접근이 필요한 이유: 사진 및 동영상 업로드 및
              임시 저장
            </ListItem>
          </List>

          {/* 제9조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제9조(개인정보의 안전성 확보조치에 관한 사항)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 개인정보의 안전성 확보를 위해 다음과 같은
            조치를 취하고 있습니다.
          </Text>
          <Text textStyle='h4' mb={4}>
            <strong>정기적인 자체 감사 실시</strong>
            <br />
            개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체
            감사를 실시하고 있습니다.
          </Text>
          <Text textStyle='h4' mb={4}>
            <strong>개인정보 취급 직원의 최소화 및 교육</strong>
            <br />
            개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여
            개인정보를 관리하는 대책을 시행하고 있습니다.
          </Text>
          <Text textStyle='h4' mb={4}>
            <strong>해킹 등에 대비한 기술적 대책</strong>
            <br />
            <BeerlotSemanticTag />은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보
            유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인
            갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고
            기술적/물리적으로 감시 및 차단하고 있습니다.
          </Text>
          <Text textStyle='h4' mb={4}>
            <strong>개인정보의 암호화</strong>
            <br />
            이용자의 개인정보는 암호화 되어 저장 및 관리되고 있어, 본인만이 알
            수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일
            잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
          </Text>
          <Text textStyle='h4' mb={4}>
            <strong>개인정보에 대한 접근 제한</strong>
            <br />
            개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
            부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
            조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
            접근을 통제하고 있습니다.
          </Text>
          {/* 제10조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제10조 (개인정보를 자동으로 수집하는 장치의 설치•운영 및 거부에 관한
            사항)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 이용자에게 개별적인 맞춤서비스를 제공하기
            위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를
            사용합니다.
            <br />
            쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터
            브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의
            하드디스크에 저장되기도 합니다.
          </Text>
          <List spacing={3} pl={6} mb={4}>
            <ListItem textStyle='h4'>
              1. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에
              대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여
              이용자에게 최적화된 정보 제공을 위해 사용됩니다.
            </ListItem>
            <ListItem textStyle='h4'>
              2. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구{'>'}인터넷
              옵션{'>'}개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수
              있습니다.
            </ListItem>
            <ListItem textStyle='h4'>
              3. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
              있습니다.
            </ListItem>
          </List>

          {/* 제11조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제11조 (개인정보 보호책임자에 관한 사항)
          </Text>
          <Text textStyle='h4' mb={4}>
            <BeerlotSemanticTag />은 개인정보 처리에 관한 업무를 총괄해서
            책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제
            등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </Text>
          <Text textStyle='h4' mb={4}>
            • 개인정보 보호책임자
            <br />
            성명 :이연우
            <br />
            이메일 : ywlee2212@gmail.com
          </Text>

          {/* 제12조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제12조(정보주체의 권익침해에 대한 구제방법)
          </Text>
          <Text textStyle='h4' mb={4}>
            정보주체는 개인정보침해로 인한 구제를 받기 위하여
            개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
            분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
            개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기
            바랍니다.
          </Text>
          <List spacing={3} pl={6} mb={4}>
            <ListItem textStyle='h4'>
              1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972
              (www.kopico.go.kr)
            </ListItem>
            <ListItem textStyle='h4'>
              2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
            </ListItem>
            <ListItem textStyle='h4'>
              3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
            </ListItem>
            <ListItem textStyle='h4'>
              4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
            </ListItem>
          </List>

          <Text textStyle='h4' mb={4}>
            「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
            정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대
            하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의
            침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수
            있습니다.
            <br />※ 행정심판에 대해 자세한 사항은
            중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
          </Text>
          {/* 제13조 */}
          <Text as='h2' textStyle='h2_bold' mt={6} mb={4}>
            제13조(개인정보 처리방침 변경)
          </Text>
          <Text textStyle='h4' mb={4}>
            이 개인정보처리방침은 2024년 8월 18일부터 적용됩니다.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

const BeerlotSemanticTag = () => {
  return <>&lt; 비어랏 &gt;</>
}

const BeerlotLinkSemanticTag = () => {
  return (
    <>
      &lt; 비어랏 &gt; (
      <Link
        href='https://beerlot.info/'
        isExternal
        textColor={'gray.300'}
        textDecoration={'underline'}
      >
        &apos;https://beerlot.info/&apos;
      </Link>{' '}
      이하 &apos;비어랏(BeerLot)&apos;)
    </>
  )
}
