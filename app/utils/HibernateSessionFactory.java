/*
Copyright (c) 2013 - 2014 ACenterA Inc.

MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

package utils;

import org.hibernate.*;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Lifecycle;
import org.springframework.beans.annotation.AnnotationBeanUtils;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.type.filter.AnnotationTypeFilter;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import play.Logger;
import play.api.Play;
import plugins.PluginEvent;
import plugins.PluginManager;

import javax.naming.Context;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.sql.DataSource;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Properties;
import java.util.Set;

/*
 * Author:Siddhartha
 * */
/**
 * Configures and provides access to Hibernate sessions, tied to the
 * current thread of execution.  Follows the Thread Local Session
 * pattern,
 */
public class HibernateSessionFactory implements Lifecycle {

    /**
     * Location of hibernate.cfg.xml file.
     * Location should be on the classpath as Hibernate uses
     * #resourceAsStream style lookup for its configuration file.
     * The custom classpath location of the hibernate config file is
     * in the custom package. Use #setConfigFile() to update
     * the location of the configuration file for the current session.
     */
    private static final String PROPERTY_NAME_DATABASE_DRIVER                   = "db.driver";
    private static final String PROPERTY_NAME_DATABASE_PASSWORD                 = "db.password";
    private static final String PROPERTY_NAME_DATABASE_URL                      = "db.url";
    private static final String PROPERTY_NAME_DATABASE_USERNAME                 = "db.username";

    private static final String PROPERTY_NAME_HIBERNATE_DIALECT                 = "hibernate.dialect";
    private static final String PROPERTY_NAME_HIBERNATE_SHOW_SQL                = "hibernate.show_sql";
    private static final String PROPERTY_NAME_ENTITYMANAGER_PACKAGES_TO_SCAN    = "entitymanager.packages.to.scan";


    private static String CONFIG_FILE_LOCATION = "hibernate.cfg.xml";
    private static final ThreadLocal<Session> threadLocal = new ThreadLocal<Session>();
    private  static Configuration  configuration = null;
    private static SessionFactory sessionFactory;
    private static String configFile = CONFIG_FILE_LOCATION;
    private static Context ctx = null;

    static {
        buildSessionFactory();
    }


    private  static void buildSessionFactory() {

        try {
            if (sessionFactory == null) {
                //Play.current().getFile("conf/hibernate.cfg.xml")
                configuration = new AnnotationConfiguration()
                        .configure(configFile);

                /*ArrayList<Class> classes = new ArrayList<Class>();

                LocalSessionFactoryBean sessionFactoryBean = new LocalSessionFactoryBean();
                sessionFactoryBean.setDataSource(dataSource());
                //sessionFactoryBean.setAnnotatedClasses(new Class[]{Team.class});//new row!!!
                //sessionFactoryBean.setPackagesToScan("models.db");
                sessionFactoryBean.setHibernateProperties(hibProperties());
*/
                //org.springframework.orm.hibernate4.LocalSessionFactoryBean
                // the following will detect all classes that are annotated as @Entity
                ClassPathScanningCandidateComponentProvider scanner =
                        new ClassPathScanningCandidateComponentProvider(false);

                scanner.addIncludeFilter(new AnnotationTypeFilter(Embeddable.class));
                scanner.addIncludeFilter(new AnnotationTypeFilter(Entity.class));

                // only register classes within "com.fooPackage" package
                for (BeanDefinition bd : scanner.findCandidateComponents("models.db")) {
                    String name = bd.getBeanClassName();
                    try {
                        Class.forName(name).newInstance();
                        Logger.debug("Adding entity : " + name);
                        configuration.addAnnotatedClass(Class.forName(name));
                    } catch (Exception E) {
                        // TODO: handle exception - couldn't load class in question
                        E.printStackTrace();
                    }
                } // for


                //sessionFactory = sessionFactoryBean.getObject();

                //configuration.setInterceptor(new HibernatePostLoadInterceptor());
                //configuration.setListener("post-load",new ACenterAPostLoadEventListener());

                //configuration.configure(configFile);

                sessionFactory = configuration.buildSessionFactory();

                /*
                 SessionFactoryImpl sessionFactoryImpl = (SessionFactoryImpl) hibernateEntityManagerFactory.getSessionFactory();
    sessionFactoryImpl.getEventListeners().setPreInsertEventListeners(new <span class="skimlinks-unlinked">org.hibernate.event.PreInsertEventListener</span>[] { this.preInsertEventListener });
    sessionFactoryImpl.getEventListeners().setPreUpdateEventListeners(new <span class="skimlinks-unlinked">org.hibernate.event.PreUpdateEventListener</span>[] { this.preUpdateEventListener });
    sessionFactoryImpl.getEventListeners().setPreDeleteEventListeners(new <span class="skimlinks-unlinked">org.hibernate.event.PreDeleteEventListener</span>[] { this.preDeleteEventListener });


    SessionFactoryImpl sessionFactoryImpl = (SessionFactoryImpl) hibernateEntityManagerFactory.getSessionFactory();
    EventListenerRegistry registry = sessionFactoryImpl.getServiceRegistry().getService(<span class="skimlinks-unlinked">EventListenerRegistry.class</span>);
    registry.getEventListenerGroup(EventType.POST_COMMIT_INSERT).appendListener(listener);
    registry.getEventListenerGroup(EventType.POST_COMMIT_UPDATE).appendListener(listener);
}
                 */


                //sessionFactory.getE
                //org.hibernate.SessionFactoryObserver

                /*HistoryListener historyListener = new HistoryListener();
                configuration.setL  ("pre-insert", historyListener);
                configuration.setListener("pre-update", historyListener);
                configuration.setListener("pre-delete", historyListener);*/

/*
                EntityCallbackHandler callbackHandler = new EntityCallbackHandler();
                callbackHandler.add(reflectionManager.toXClass(EntityWithJPACallbacks.class), reflectionManager);
                EventListenerRegistry registry = sessionFactory.getServiceRegistry().getService(EventListenerRegistry.class);
// for @PrePersist:
                registry.setListeners(EventType.PERSIST, new EJB3PersistEventListener(callbackHandler));
// for @PreUpdate
                registry.setListeners(EventType.FLUSH_ENTITY, new EJB3FlushEntityEventListener(callbackHandler));
                */







                // only register classes within "com.fooPackage" package
                //ACenterA TODO: SESSION FACTORY CREATED..
                PluginManager.notifyEvent(PluginEvent.HIBERNATE_SESSION_FACTORY_CREATED, getSession());



                /*
                /* Internal ACenterA Inc. Use
                ClassPathScanningCandidateComponentProvider scannerTree =
                        new ClassPathScanningCandidateComponentProvider(false);


                scannerTree.addIncludeFilter(new AnnotationTypeFilter(models.tree.TreeItem.class));


                getSession();
                for (BeanDefinition bd : scannerTree.findCandidateComponents("models.tree")) {
                    String classId = bd.getBeanClassName();
                    try {
                        Logger.debug("WILL INSERT INTO ELEMENTS_TYPE : " + classId);
                        Class.forName(classId).newInstance();
                        ElementsType type = new ElementsType();

                        type.setClassId(classId);

                        type.setName(classId);

                        ElementsType t = ElementsTypeImpl.getOrCreateElementsType(type);
                        Logger.debug("INSERTED OF : " + t);
                        //configuration.addAnnotatedClass();
                    } catch (Exception E) {
                        // TODO: handle exception - couldn't load class in question
                        E.printStackTrace();
                    }
                } // for
                */



                closeSession();

            }
        } catch (Exception e) {
            e.printStackTrace();
            System.err
                    .println("%%%% Error Creating SessionFactory %%%%");
            e.printStackTrace();
        }

    }

    private HibernateSessionFactory() {
    }

    /**
     * Returns the ThreadLocal Session instance.  Lazy initialize
     * the <code>SessionFactory</code> if needed.
     *
     *  @return Session
     *  @throws HibernateException
     */

    public static Session getSession() throws HibernateException {

        Session session = (Session) threadLocal.get();

        if (session == null || !session.isOpen() || !session.isConnected()) {


            if (session != null && (!session.isOpen() || !session.isConnected())) {
                try {
                    throw new Exception("CLOISNG HIBERNATE");
                }catch(Exception ee){
                    Logger.debug("HIBERNATE SESSION WAS NOT OPEN BUT IS NOT NULL ?????");
                    ee.printStackTrace();
                    ;
                }
            }

            if (sessionFactory == null) {

                try {
                    throw new Exception("ee");
                } catch (Exception ee) {
                    Logger.debug("HIBERNATE sessionFactory WAS : " +session);
                    ee.printStackTrace();;
                }

                rebuildSessionFactory();
            }

            session = null;
            while (session == null) {
                    session = null;
                    try {
                        session = sessionFactory.getCurrentSession();
                    } catch (HibernateException ex) {
                        try {
                            session = sessionFactory.openSession();
                        } catch (Exception ee)  {
                            ee.printStackTrace();
                            session = null;
                        }
                    }

                /*try {
                    if ((session != null) && (((session.getTransaction().isActive() && session.isDirty()) || (!session.isOpen())))) {
                        //session = null;
                        session = sessionFactory.openSession();
                    }
                } catch (Exception e) {
                    //no active session... we should check if active trasnaction
                    e.printStackTrace();
                }*/
            }


            if (session == null ) {

                try {
                    throw new Exception("ee");
                } catch (Exception ee) {
                    Logger.debug("HIBERNATE SESSION IS NULLL???");
                    ee.printStackTrace();;
                }


            } else {
                try {
                    if (! session.getTransaction().isActive() ) {
                        Transaction t = session.beginTransaction();
                    }
                    threadLocal.set(session);
                } catch (Exception e) {
                }
            }
        }

        if (session == null ) {
            Logger.error("Session was null");

            try {
                throw new Exception("ee");
            } catch (Exception ee) {
                Logger.debug("HIBERNATE SESSION IS NULLL 111???");
                ee.printStackTrace();;
            }
        }

        if (session != null && (!session.isOpen() || !session.isConnected())) {
            try {
                throw new Exception("ee");
            } catch (Exception ee) {
                Logger.debug("HIBERNATE SESSION IS NOT OPEN ???");
                ee.printStackTrace();;
            }
        }
        return session;
    }

    /**
     *  Rebuild hibernate session factory
     *
     */
    public static void rebuildSessionFactory() {
        try {
            try {
                sessionFactory.close();
            } catch (Exception e) {

            }
            sessionFactory=null;

            buildSessionFactory();
        } catch (Exception e) {
            System.err
                    .println("%%%% Error Creating SessionFactory %%%%");
            e.printStackTrace();
        }
    }

    public static void unloadAll() throws HibernateException {
        try {
            closeSession();
        } catch (Exception e) {

        }

        try {
            sessionFactory.close();
        } catch (Exception e) {

        }

        sessionFactory = null;
        configuration = null;
    }

    /**
     *  Rollback if session exists and was active..
     *
     *  @throws HibernateException
     */
    public static void rollback() throws HibernateException {


        Session session = (Session) threadLocal.get();
        try {
            if (session != null) {
                if (session.isOpen()) {
                    if (session.getTransaction() != null) {
                        if (!session.getTransaction().wasCommitted()) {
                            if (session.getTransaction().isActive()) {
                                if (!session.getTransaction().wasRolledBack()) {

                                    try {
                                        throw new Exception("ROLLBACK");
                                    } catch (Exception ee) {
                                        Logger.debug("HIBERNATE SESSION ROLLBACK??");
                                        ee.printStackTrace();;
                                    }

                                    session.getTransaction().rollback();
                                }
                            }
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        closeSession();
    }
    /**
     *  Close the single hibernate session instance.
     *
     *  @throws HibernateException
     */
    public static void closeSession() throws HibernateException {
        Session session = (Session) threadLocal.get();

        threadLocal.set(null);

        if (session != null) {
            try {
                if (session != null) {
                    if (session.isOpen()) {
                        if (session.getTransaction() != null) {
                            if ( !session.getTransaction().wasCommitted() ) {
                                if (session.getTransaction().isActive()) {
                                    if (!session.getTransaction().wasRolledBack()) {
                                        session.getTransaction().commit();
                                    }
                                }
                            }
                        } else {
                        }
                    }
                    try {
                        session.flush();
                    } catch (Exception ee) {

                    }
                }

            } catch (HibernateException he) {
            } catch (Exception ee) {
            }
            try {
                if (session.isOpen()) {
                    session.close();
                }
            } catch (HibernateException he) {

            } catch (Exception ee) {

            }

            session = null;
        }
    }

    /**
     *  return session factory
     *
     */
    public static org.hibernate.SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    /**
     *  return session factory
     *
     * session factory will be rebuilded in the next call
     */
    public static void setConfigFile(String configFile) {
        HibernateSessionFactory.configFile = configFile;
        sessionFactory = null;
    }

    /**
     *  return hibernate configuration
     *
     */
    public static Configuration getConfiguration() {
        return configuration;
    }

    @Override
    public boolean onSave(Session session) throws CallbackException {
        return false;
    }

    @Override
    public boolean onUpdate(Session session) throws CallbackException {
        return false;
    }

    @Override
    public boolean onDelete(Session session) throws CallbackException {
        return false;
    }

    @Override
    public void onLoad(Session session, Serializable serializable) {
        Logger.debug("ON LOAD CALLED ? : " + serializable);
    }
}
