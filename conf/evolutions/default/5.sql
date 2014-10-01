# Add project roles indexing


# --- !Ups

insert into partner (name, salt, funds, monthlycost, totalcost, funds_added,cloudid,demo_task_id, subscription_type, wizard) values ('admin@acentera.com', '63f6c0ff4bbbbd62d2ce9d434416c151', 0,0, 0, 0, 342152,0,0,1);
insert into user (id, cred, salt, email, partner_id) select 0, 'D6uoyK9z6RRnYrK9DP7KWnY37PUvWJXLxaEWfUdB+AY=', 'N940tTMwnnsYp577WS5tAo02cy7nmHdzP1DH+boBJc8=', 'admin@acentera.com', id from partner where name = 'admin@acentera.com';

# --- !Downs


delete from user where email='admin@acentera.com';

delete from partner where name='admin@acentera.com';


