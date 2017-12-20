package com.dominicvitucci.mychoicecontraception;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePush;
import net.no_mad.tts.TextToSpeechPackage;
import com.audioStreaming.ReactNativeAudioStreamingPackage;
import fm.indiecast.rnaudiostreamer.RNAudioStreamerPackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }
    
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG),
            new TextToSpeechPackage(),
            new ReactNativeAudioStreamingPackage(),
            new RNAudioStreamerPackage(),
            new ReactNativeRestartPackage(),
            new FastImageViewPackage(),
            new ReactNativeLocalizationPackage(),
            new VectorIconsPackage(),
            new RNI18nPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
