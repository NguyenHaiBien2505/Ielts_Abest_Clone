(function () {
    const form = document.getElementById('registerTestForm');
    const alertBox = document.getElementById('registerTestAlert');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // lấy giá trị
        const fullName = document.getElementById('fullNameTest').value.trim();
        const email = document.getElementById('emailTest').value.trim();
        const phone = document.getElementById('phoneTest').value.trim();

        // kiểm tra đơn giản
        if (!fullName || !email || !phone) {
            alertBox.className = 'alert alert-danger mt-3';
            alertBox.textContent = 'Vui lòng điền đầy đủ thông tin.';
            alertBox.classList.remove('d-none');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alertBox.className = 'alert alert-danger mt-3';
            alertBox.textContent = 'Email không hợp lệ. Vui lòng nhập đúng định dạng.';
            alertBox.classList.remove('d-none');
            return;
        }

        // nếu hợp lệ
        alertBox.className = 'alert alert-success mt-3';
        alertBox.textContent = `✅ Cảm ơn ${fullName}! Chúng tôi sẽ liên hệ với bạn qua ${email} hoặc ${phone} trong thời gian sớm nhất.`;
        alertBox.classList.remove('d-none');

        // (tuỳ chọn) reset form
        form.reset();

        // ẩn thông báo sau 6 giây
        setTimeout(() => {
            alertBox.classList.add('d-none');
        }, 6000);
    });
})();