import roman_numerals

def test_one(monkeypatch, capsys):
    monkeypatch.setattr("sys.argv", ["roman_numerals.py", "1"])
    roman_numerals.main()
    captured = capsys.readouterr()
    assert captured.out == "1 in Roman Numerals is I\n"

def test_forty(monkeypatch, capsys):
    monkeypatch.setattr("sys.argv", ["roman_numerals.py", "40"])
    roman_numerals.main()
    captured = capsys.readouterr()
    assert captured.out == "40 in Roman Numerals is XL\n"