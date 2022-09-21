# adventure-game

Idéen er at i skal lave flere forskellige html sider med spørgsmål.
Svarene bliver gemt i inputs af typen hidden
Så længe i bruger de rigtige klasser på jeres inputs så vil den callback fuktion der ligger på submit eventen
gøre arbejdet for jer.
Der loopes i gennem alle korekte svar og hvis der er et match med brugerens input så gennereres et link til siden med næste spørgsmål.

Forslag til forbedringer.
I kan bruge
localStorage.setItem(key, value)
Til at gemme en værdi som så kan bruges på alle siderne F.eks. spillerens navn og ynglings farve.
For at hente værdien bruger i bare
localStorage.getItem(key)
