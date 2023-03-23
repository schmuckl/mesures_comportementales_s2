source ("area-polygon.r")

x <- c (1, 2, 2, 1, 1)
y <- c (1, 1, 2, 2, 1)

plot (x, y, asp = 1, las = 1)
lines (x, y)

area.polygon (x, y)

x <- c (1, 2, 2, 1.5, 1, 1)
y <- c (1, 1, 2, 2.5, 2, 1)

plot (x, y, asp = 1, las = 1)
lines (x, y)

area.polygon (x, y)

t <-  seq (0, 2 * pi, by = pi / 100)
x <- cos (t)
y <- sin (t)

plot (x, y, asp = 1, las = 1)
lines (x, y)

area.polygon (x, y)
