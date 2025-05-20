import requests

BASE_URL = "http://localhost:7777/Crs"

def test_add_course():
    res = requests.post(f"{BASE_URL}/Add", data={"name": "Python QA Course"})
    assert res.status_code == 200 or res.status_code == 302  # 302 = redirect to /List

def test_get_all_courses():
    res = requests.get(f"{BASE_URL}/List")
    assert res.status_code == 200
    assert "רשימת הקורסים" in res.text

def test_edit_course():
    # כדי לבדוק עדכון צריך קודם להוסיף קורס
    add = requests.post(f"{BASE_URL}/Add", data={"name": "TempCourse"})
    assert add.status_code in [200, 302]

    # נניח שה-ID שנוסף הוא 1 (בפועל תצטרך לשלוף אותו מה-DB)
    update = requests.post(f"{BASE_URL}/Edit/1", data={"name": "Updated Name"})
    assert update.status_code in [200, 302]

def test_delete_course():
    # נניח שה-ID למחיקה הוא 1
    res = requests.post(f"{BASE_URL}/Delete", data={"id": 1})
    assert res.status_code in [200, 302]
