src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"
src="https://www.gstatic.com/firebasejs/7.15.0/firebase-database.js"


// QUnit.test("Firebase Connect Test", function (assert) {
//     const result = connectFirebase()
//     assert.equal(result, 1, "Passed!");
// });

// QUnit.test("Select Business Test", function (assert) {
//     const result = selectBusiness()
//     assert.ok(result == 1, "Passed!");
// });
//
// function selectBusiness() {
//
//     if ($('input:radio[name="selectBusiness"]').is(':checked') == true) {
//         // value를 비즈니스 name에다가 넣기
//         var radioVal = $('input[name="selectBusiness"]:checked').val();
//         $('#business').val(radioVal);
//
//         // 이미 등록되어있는 비즈니스를 선택한 것이므로 이 user의 직급은 staff! - radio버튼 자동 선택
//         $("input:radio[name='employee_authority']:radio[value='Staff']").prop('checked', true);
//
//         // 모달 닫기
//         $('#searchBusinessModal').modal('hide')
//     }else{
//         alert("회사를 선택해주세요");
//     }
//     return 1;
// }